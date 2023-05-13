import React from "react";

const FilterTodo = ({ toggleFilter, setToggleFilter }) => {
  return (
    <div className="filter">
      <button
        className={`btn ${toggleFilter === "all" ? "active" : ""}`}
        value="all"
        onClick={(e) => setToggleFilter(e.target.value)}
      >
        All
      </button>

      <button
        className={`btn ${toggleFilter === "active" ? "active" : ""}`}
        value="active"
        onClick={(e) => setToggleFilter(e.target.value)}
      >
        Active
      </button>

      <button
        className={`btn ${toggleFilter === "completed" ? "active" : ""}`}
        value="completed"
        onClick={(e) => setToggleFilter(e.target.value)}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodo;
