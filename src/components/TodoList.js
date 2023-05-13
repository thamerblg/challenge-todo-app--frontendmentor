import React from "react";
import TodoItem from "./TodoItem";
import FilterTodo from "./FilterTodo";
import { SortableContainer } from "react-sortable-hoc";

const TodoList = ({
  todos,
  toggleCompleted,
  handleDelete,
  toggleFilter,
  setToggleFilter,
  handleClear,
}) => {
  return (
    <>
      <section className="tasks">
        <ul>
          {toggleFilter === "all"
            ? todos.map((todo, index) => (
                <TodoItem
                  todo={todo}
                  toggleCompleted={toggleCompleted}
                  handleDelete={handleDelete}
                  key={index}
                  index={index}
                />
              ))
            : toggleFilter === "completed"
            ? todos
                .filter((todo) => todo.completed)
                .map((todo, index) => (
                  <TodoItem
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    handleDelete={handleDelete}
                    key={index}
                    index={index}
                  />
                ))
            : todos
                .filter((todo) => !todo.completed)
                .map((todo, index) => (
                  <TodoItem
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    handleDelete={handleDelete}
                    key={index}
                    index={index}
                  />
                ))}
        </ul>

        <div className="summary">
          <p>{todos.filter((todo) => !todo.completed).length} items left</p>
          <FilterTodo
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
          />
          <button onClick={() => handleClear()}>Clear completed</button>
        </div>
      </section>
      <section className="filter-mobile">
        <FilterTodo
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
        />
      </section>
    </>
  );
};

export default SortableContainer(TodoList);
