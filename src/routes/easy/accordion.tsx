import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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
      <h3>Welcome to Accordion!</h3>
    </div>
  );
}
