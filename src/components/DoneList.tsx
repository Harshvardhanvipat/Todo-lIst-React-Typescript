import React from "react";
import { Todo } from "../App";

interface DoneListProps {
  todos: Todo[];
}

function DoneList({ todos }: DoneListProps) {
  const todosDone = todos.filter((todo) => {
    return todo.isDone;
  });

  return (
    <div id="done-list">
      <h2> Done</h2>
      <ul>
        {todosDone.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isDone} disabled />
              {todo.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DoneList;
