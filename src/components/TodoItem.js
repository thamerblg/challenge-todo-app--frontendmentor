import React from "react";
import cross from "../images/icon-cross.svg";
import { SortableElement } from "react-sortable-hoc";

const TodoItem = ({ todo, toggleCompleted, handleDelete }) => {
  return (
    <li
      className={`task ${todo.completed ? "completed" : ""}`}
      draggable="true"
    >
      <button className="box" onClick={() => toggleCompleted(todo)}></button>
      <p>{todo.task}</p>
      <img
        className="cross"
        src={cross}
        alt="icon-cross"
        onPointerDown={() => handleDelete(todo)}
      />
    </li>
  );
};

export default SortableElement(TodoItem);
