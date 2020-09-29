import React from "react";
interface HeaderProps {
  title?: string;
}

function Header({ title = "The todo List" }: HeaderProps) {
  return (
    <div>
      <h1>Todo List</h1>
    </div>
  );
}

export default Header;
