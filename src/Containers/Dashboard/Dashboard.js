import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Content from "../Content/Content";
import global from "../../Global.module.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    // logoutx();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Content />
      <button onClick={logout} className={global.button} type="button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
