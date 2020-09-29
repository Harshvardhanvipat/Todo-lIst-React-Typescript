import React from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: any;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  function updateCheckedItem(todo: Todo) {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;

    setTodos([...todos]);
  }

  return (
    <div id="todo-list">
      <h2> Todo List</h2>
      <ul>
        {todosInProgress.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.isDone}
                onChange={(e) => {
                  updateCheckedItem(todo);
                }}
              />
              {todo.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
