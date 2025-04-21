import { CheckIcon, CircleX, TrashIcon } from "lucide-react";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type TodoState = {
  id: string;
  task: string;
  completed: boolean;
};

export function TodoList() {
  const id = uuidv4();
  const uniqueID = id.slice(0, 8);
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodoState[]>([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTaskValue.length === 0) {
      return;
    }

    const newTask = {
      id: uniqueID,
      task: newTaskValue,
      completed: false,
    };

    setTodos((prevState) => [...prevState, newTask]);
    setNewTaskValue("");

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCheck = (taskId: string) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === taskId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (taskId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-2 mb-4"
        autoFocus
      >
        <input
          type="text"
          value={newTaskValue}
          ref={inputRef}
          onChange={(event) => setNewTaskValue(event.target.value)}
          className="flex-grow bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-blue-200 shadow-sm focus:shadow"
          placeholder="Enter a new task..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded transition duration-300 ease disabled:bg-blue-200 disabled:cursor-not-allowed"
          disabled={newTaskValue.length === 0}
        >
          Add
        </button>
      </form>
      {todos?.length ? (
        <ul>
          {todos.map((todo) => {
            const isCompleted = todo.completed === true;
            return (
              <li
                key={todo.id}
                className={`p-2 border-b border-b-slate-200 mb-2 ${isCompleted && "bg-green-200 rounded"}`}
              >
                <div className="flex justify-between items-center">
                  <span className="flex-1 mr-4">{todo.task}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCheck(todo.id)}
                      className="text-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded"
                      aria-label={`Mark task "${todo.task}" as complete`}
                    >
                      {isCompleted ? (
                        <CircleX className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <CheckIcon className="w-5 h-5" />
                      )}
                    </button>

                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded"
                      aria-label={`Delete task "${todo.task}"`}
                    >
                      <TrashIcon className="w-5 h-5" />{" "}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="text-center border border-amber-300 bg-amber-200 text-base font-semibold py-1">
          No Todos added :(
        </div>
      )}
    </div>
  );
}
