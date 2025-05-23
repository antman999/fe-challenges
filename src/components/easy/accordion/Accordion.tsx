import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ACCORDION_DATA } from "./accordionData";

export function AccordionComponent() {
  const [openSections, setOpenSections] = useState(new Set());

  const handleSectionToggle = (value: string) => {
    const newOpenSection = new Set(openSections);

    newOpenSection.has(value)
      ? newOpenSection.delete(value)
      : newOpenSection.add(value);

    setOpenSections(newOpenSection);
  };
  return (
    <div className="p-2">
      {ACCORDION_DATA.map((accordionItem) => {
        const isExpanded = openSections.has(accordionItem.value);
        return (
          <div key={accordionItem.value} className="my-4 p-1">
            <button
              className={`text-md font-semibold w-full cursor-pointer flex border-b items-center border-b-indigo-600 justify-between ${isExpanded && "text-indigo-600"}`}
              onClick={() => handleSectionToggle(accordionItem.value)}
            >
              <span>{accordionItem.title}</span>
              <span
                className={`transform transition-transform duration-400 ease-out ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown />
              </span>
            </button>
            <section hidden={!isExpanded} className="mt-1">
              {accordionItem.contents}
            </section>
          </div>
        );
      })}
    </div>
  );
}
