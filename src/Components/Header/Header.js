import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import global from "../../Global.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    // logoutx();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <ul className={styled.nav}>
      <li>
        <NavLink className="active" to="/dashboard/todoapp">
          Todo
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/player">Player</NavLink>
      </li>
      <button onClick={logout} className={global.button} type="button">
        Logout
      </button>
    </ul>
  );
};

export default Header;
