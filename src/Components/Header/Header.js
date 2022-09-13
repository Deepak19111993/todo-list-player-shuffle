import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Header.module.scss";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className={styled.nav}>
      <li>
        <NavLink className="active" to="/">
          Todo
        </NavLink>
      </li>
      <li>
        <NavLink to="/player">Player</NavLink>
      </li>
    </ul>
  );
};

export default Header;
