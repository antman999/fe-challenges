# Approach and Explanation

## Question

Build a todo app that allows users to create task, complete them, and delete them.

## Requirements

- Have an input form that allows you to type out a task.
- Once the task is written you can add it to your list of tasks.
- Each task should have interactive elements to mark it as complete/incomplete and to delete it.
- Oldest tasks should appear at the bottom of the list.

## Approach

1. First we need to discuss the input. This should be a semantic form that needs to be controlled. The input itself should have it's own state with a `value` and `onChange` prop.
2. Next, we need to think about the state for our todos. At it's core a todo is composed of an `id, task, completed`. We can create a todo state that is an empty array which will house objects of todos like so `[{id: string, task: string, completed: boolean}, ...]`
3. We can start working on the layout of the component. which will at a base level be a form and a unordered list to map over the todos.
4. When we create a todo it will be done via a `onSubmit` on the form.
5. Create a `handleNewTodo` function attached to the form. The only parameter this function will have is an `event`.
   - Use the event to prevent the default browser reload behavior.
   - If the input is empty or full of whitespace return, use the input state.
   - Create an object to push onto the todos state. `const newTodo = {id,task, completed}`
   - How you handle the id creation depends on the case but an easy way is to use uuid.
   - Once created push this new todo onto state like so `setTodos((prevState)=> [...prevState, newTodo])`.
   - After clear the input value `setNewTask('')`.
6. When mapping over the todos make sure the key is set to the id of the todo.
7. To handle deleting a todo item create a delete button within each todo.
   - Its `onClick` handler calls handleDelete, passing the todo.id.
   - The handleDelete function updates the todos state by using the .filter() array method. This creates a new array containing only the todos whose id does not match the taskId, effectively removing the desired todo.
8. Completing a todo
   - Within each list item, a `<button>` is provided for toggling the task's completion status.
   - An `onClick` handler calls `handleCheck`, passing the todo.id.
   - The `handleCheck` function updates the todos state using `setTodos`. It maps over the current todos, and when it finds the todo with the matching taskId, it returns a new object with the completed status toggled (!todo.completed). Other todos are returned unchanged.

## Improvements

- Form validation
- Input focus after creating a todo
- Type safety
- Handle errors and empty todo lists.
- Save the todos list to localStorage or a backend server so tasks persist across page reloads or user sessions.
- Add options to filter tasks (e.g., show only active, only completed) or sort them differently (e.g., alphabetically, by completion status).
- Editing tasks
