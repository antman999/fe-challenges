import { createFileRoute } from "@tanstack/react-router";
import { Slideshow } from "@/components/medium/slideshow/Slideshow";
import slideshowMarkdown from "@/components/medium/slideshow/slideshowMarkdown.md?raw";

import ChallengeLayout from "@/layouts/ChallengeLayout";

export const Route = createFileRoute("/medium/slideshow")({
  component: SlideshowChallengePage,
});

function SlideshowChallengePage() {
  return (
    <ChallengeLayout
      title="Slideshow Challenge"
      component={<Slideshow />}
      markdown={slideshowMarkdown}
    />
  );
}
