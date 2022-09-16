import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo() {
  const [todo, setTodo] = useState("Robert");
  let allTodos = [];

  function updateTodo(e) {
    e.preventDefault();
    setTodo(e.target.value);
    console.log(todo);
  }

  function updateAllTodos() {
    allTodos.push(todo);
    setTodo("");
    console.log(allTodos);
  }
  return (
    <div className="add_todo">
      <input
        placeholder="Add your new todo"
        type="text"
        className="add_input"
        value={todo}
        onChange={e => updateTodo(e)}
      />
      <button className="add_btn" onClick={updateAllTodos}>
        Add
      </button>
    </div>
  );
}

export default AddTodo;
