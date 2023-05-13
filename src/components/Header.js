import React from "react";

const Header = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h1 className="title">todo</h1>
      <div className="theme-toggle" onClick={toggleTheme}></div>
    </header>
  );
};

export default Header;
