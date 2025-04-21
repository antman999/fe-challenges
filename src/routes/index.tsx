import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Hey there, Welcome!
      </h2>
      <p className="text-gray-700 mb-4">
        Glad you stopped by! This website is where I mess around with React by
        creating small, focused challenges.
      </p>
      <p className="text-gray-700">
        Each little project in the navigation is a chance for me to learn,
        experiment, and put ideas into practice. I'll be sharing how I
        approached solving them and walking through the code behind the scenes.
        Have a look around and check out some projects!
      </p>
    </div>
  );
}
