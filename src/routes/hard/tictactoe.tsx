import { createFileRoute } from "@tanstack/react-router";
import { TicTacToe } from "@/components/hard/tictactoe/Tictactoe";
import tictactoeMarkdown from "@/components/hard/tictactoe/tictactoeMarkdown.md?raw";

import ChallengeLayout from "@/layouts/ChallengeLayout";

export const Route = createFileRoute("/hard/tictactoe")({
  component: TicTacToeChallengePage,
});

function TicTacToeChallengePage() {
  return (
    <ChallengeLayout
      title="Tic-Tac-Toe"
      component={<TicTacToe />}
      markdown={tictactoeMarkdown}
    />
  );
}
