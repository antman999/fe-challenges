import { useState } from "react";

export function FlightBooker() {
  const today = new Date().toISOString().split("T")[0];
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [hasReturnFlight, setHasReturnFlight] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `you are all set for your flight departing ${departureDate} ${
        hasReturnFlight ? `that returns on ${returnDate}` : ""
      }`
    );
  };

  const handleFlightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value === "round-trip") {
      setHasReturnFlight(true);
    } else {
      setHasReturnFlight(false);
    }
  };

  const getMinReturnDate = () => {
    if (!departureDate) return today;
    const nextDay = new Date(departureDate);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay.toISOString().split("T")[0];
  };

  return (
    <div className="mb-2">
      <form onSubmit={handleSubmit} className="flex gap-4 items-center text-md">
        <select
          onChange={handleFlightTypeChange}
          className="border-2 px-2 rounded py-1 border-gray-400 focus:border-pink-400 focus:outline-none"
        >
          <option value="one-way">One way ticket</option>
          <option value="round-trip">Round trip ticket</option>
        </select>
        <input
          type="date"
          min={today}
          value={departureDate}
          className="border-2 px-2 rounded py-0.5 border-gray-400 focus:border-pink-400 focus:outline-none"
          onChange={(event) => setDepartureDate(event.target.value)}
        />
        {hasReturnFlight && (
          <input
            type="date"
            min={getMinReturnDate()}
            value={returnDate}
            className="border-2 px-2 rounded py-0.5 border-gray-400 focus:border-pink-400 focus:outline-none"
            onChange={(event) => setReturnDate(event.target.value)}
          />
        )}
        <button
          type="submit"
          disabled={
            !departureDate.length || (hasReturnFlight && !returnDate.length)
          }
          className="bg-pink-500 cursor-pointer hover:bg-pink-700 text-white text-sm font-semibold py-1.5 px-4 rounded transition duration-300 ease disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          Book flight
        </button>
      </form>
    </div>
  );
}
