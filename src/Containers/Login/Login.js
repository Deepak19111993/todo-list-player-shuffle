import React from "react";
import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    // loginx();
    localStorage.setItem("token", "randomValue");
    navigate("/dashboard");
  };

  return (
    <div className={global.formWrapper}>
      <div className={global.field}>
        <label>Email</label>
        <input name="email" type="text" placeholder="Enter Email" />
      </div>
      <div className={global.field}>
        <label>Password</label>
        <input name="password" type="password" placeholder="Enter Password" />
      </div>
      <button onClick={login} className={global.button} type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
