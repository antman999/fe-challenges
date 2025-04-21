import { createFileRoute } from "@tanstack/react-router";
import { TodoList } from "@/components/medium/todo-list/TodoList";
import todoListMarkdown from "@/components/medium/todo-list/todoListMarkdown.md?raw";

import ChallengeLayout from "@/layouts/ChallengeLayout";

export const Route = createFileRoute("/medium/todolist")({
  component: TodoListChallengePage,
});

function TodoListChallengePage() {
  return (
    <ChallengeLayout
      title="Todo-list Challenge"
      component={<TodoList />}
      markdown={todoListMarkdown}
    />
  );
}
