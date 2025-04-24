import { useState } from "react";

function Input({
  isDuplicate,
  value,
  onChange,
}: {
  isDuplicate: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const statusSpanBaseStyle =
    "w-32 shrink-0 text-sm whitespace-nowrap text-left";

  return (
    <div className="flex gap-2 items-center">
      <input
        value={value}
        onChange={onChange}
        className={`
          flex-grow bg-transparent placeholder:text-slate-400
          text-slate-700 text-sm rounded-md px-3 py-2
          border
          ${isDuplicate ? "border-red-600" : "border-slate-200"}
        `}
      />
      {value.length >= 3 ? (
        isDuplicate ? (
          <span className={`${statusSpanBaseStyle} text-red-600`}>
            Duplicate Value
          </span>
        ) : (
          <span className={`${statusSpanBaseStyle} text-green-600`}>
            All good
          </span>
        )
      ) : (
        <span className={`${statusSpanBaseStyle} text-orange-600`}>
          Too short
        </span>
      )}
    </div>
  );
}

export function InputValidation() {
  const [inputValues, setInputValues] = useState(["", "", ""]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
  };

  const isDuplicate = (value: string, index: number) => {
    return (
      inputValues.filter((val, idx) => val === value && idx !== index).length >
      0
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {inputValues.map((value, index) => (
        <Input
          key={index}
          value={value}
          onChange={(event) => handleChange(event, index)}
          isDuplicate={isDuplicate(value, index)}
        />
      ))}
    </div>
  );
}
