import React from "react";
import { Todo } from "../App";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  function updateCheckedItem(todo: Todo) {
    setTodos((todoArray) => {
      return todoArray.map((td) => {
        return td.id === todo.id ? { ...todo, isDone: !td.isDone } : td;
      });
    });
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
