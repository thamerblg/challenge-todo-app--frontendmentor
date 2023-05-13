import React from "react";

const AddTodo = ({ hundelSubmit, textTask, setTextTask }) => {
  return (
    <section className="addTask">
      <form onSubmit={(e) => hundelSubmit(e)}>
        <div className="box"></div>
        <input
          type="text"
          className="form-control"
          placeholder="Create a new todo..."
          value={textTask}
          onChange={(e) => setTextTask(e.target.value)}
        />
      </form>
    </section>
  );
};

export default AddTodo;
