import React from "react";
import { useState } from "react";
import { Todo } from "../App";

interface TodoInputProps {
  addTodo(todo: Todo): void;
}

function TodoInput({ addTodo }: TodoInputProps) {
  const todoObj: Todo = new Todo();

  const [todo, setTodo] = useState(todoObj);
  function submitTodo(event: any) {
    event.preventDefault();
    console.log("todo:", todo);
    addTodo(todo);
    setTodo(todoObj);
  }

  function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, description: event.target.value });
  }

  return (
    <div>
      <form id="todo-input" onSubmit={submitTodo}>
        <p>What do you want to do?</p>
        <input
          type="text"
          name="todo"
          value={todo.description}
          onChange={handleTodoChange}
        />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
}

export default TodoInput;
