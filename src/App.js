import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import { arrayMoveImmutable } from "array-move";

function App() {
  var listOfTodos = [
    { id: "1", task: "Complete online Javascript course", completed: true },
    { id: "2", task: "Jog arround the park 3x", completed: false },
    { id: "3", task: "10 minutes meditation", completed: false },
    { id: "4", task: "Read for 1 hour", completed: false },
    { id: "5", task: "Pick up groceries", completed: false },
    { id: "6", task: "Complete Todo App on Frontend Mentor", completed: false },
  ];

  const [todos, setTodos] = useState(listOfTodos);
  const [textTask, setTextTask] = useState("");
  const [theme, setTheme] = useState("light");
  const [toggleFilter, setToggleFilter] = useState("all");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const hundelSubmit = (e) => {
    e.preventDefault();
    if (textTask) {
      const newTask = {
        id: Date.now(),
        task: textTask,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setTextTask("");
    }
  };

  const handleDelete = (todoSelected) => {
    console.log(todoSelected);
    setTodos([...todos].filter((todo) => todo.id !== todoSelected.id));
  };

  const toggleCompleted = (todoSelected) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoSelected.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleClear = () => {
    setTodos([...todos].filter((todo) => !todo.completed));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setTodos((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex));
  };

  return (
    <div className={`App ${theme}`}>
      <Header toggleTheme={toggleTheme} />
      <main>
        <AddTodo
          hundelSubmit={hundelSubmit}
          textTask={textTask}
          setTextTask={setTextTask}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          toggleCompleted={toggleCompleted}
          handleDelete={handleDelete}
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
          handleClear={handleClear}
          onSortEnd={onSortEnd}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
