import { createFileRoute } from "@tanstack/react-router";
import { AccordionComponent } from "@/components/easy/accordion/Accordion";
import accordionMarkdown from "@/components/easy/accordion/accordionMarkdown.md?raw";

import ChallengeLayout from "@/layouts/ChallengeLayout";

export const Route = createFileRoute("/easy/accordion")({
  component: AccordionChallengePage,
});

function AccordionChallengePage() {
  return (
    <ChallengeLayout
      title="Accordion Challenge"
      component={<AccordionComponent />}
      markdown={accordionMarkdown}
    />
  );
}
