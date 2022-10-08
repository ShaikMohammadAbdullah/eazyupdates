import React from "react";
import ReactSwitch from "react-switch";
import "./Nav.css";

const Nav = ({ toggleTheme, theme }) => {
  return (
    <div className="nav">
      <div>EazyUpdates</div>
      <div className="switch">
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </div>
  );
};

export default Nav;
