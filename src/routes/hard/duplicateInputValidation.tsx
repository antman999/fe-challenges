import { InputValidation } from "@/components/hard/duplicateInputValidation/InputValidation";
import inputValidationMarkdown from "@/components/hard/duplicateInputValidation/inputValidationMarkdown.md?raw";
import ChallengeLayout from "@/layouts/ChallengeLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hard/duplicateInputValidation")({
  component: DuplicateInputValidationChallengePage,
});

function DuplicateInputValidationChallengePage() {
  return (
    <ChallengeLayout
      title="Duplicate Input Validation Challenge"
      component={<InputValidation />}
      markdown={inputValidationMarkdown}
    />
  );
}
