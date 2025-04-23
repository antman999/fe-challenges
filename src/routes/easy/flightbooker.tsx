import { createFileRoute } from "@tanstack/react-router";
import { FlightBooker } from "@/components/easy/flight-booker/FlightBooker";
import flightbookerMarkdown from "@/components/easy/flight-booker/flightbookerMarkdown.md?raw";

import ChallengeLayout from "@/layouts/ChallengeLayout";

export const Route = createFileRoute("/easy/flightbooker")({
  component: FlightBookerChallengePage,
});

function FlightBookerChallengePage() {
  return (
    <ChallengeLayout
      title="Flight booker Challenge"
      component={<FlightBooker />}
      markdown={flightbookerMarkdown}
    />
  );
}
