import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const DATA = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export const Route = createFileRoute("/easy/accordion")({
  component: Accordion,
});

function Accordion() {
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
      {DATA.map((accordionItem) => {
        const isExpanded = openSections.has(accordionItem.value);
        return (
          <div key={accordionItem.value} className="my-3 p-1">
            <button
              className={`text-md font-semibold w-full ${isExpanded && "text-indigo-600"}`}
              onClick={() => handleSectionToggle(accordionItem.value)}
            >
              <span className="flex border-b border-b-indigo-600">
                {accordionItem.title}
                {isExpanded ? <ChevronDown /> : <ChevronRight />}
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
