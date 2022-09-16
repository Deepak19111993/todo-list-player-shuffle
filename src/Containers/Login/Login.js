import React from "react";
import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = () => {
    // loginx();
    localStorage.setItem("token", "randomValue");
    navigate("/dashboard/todoapp");
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <div className={global.formWrapperBlock}>
      <h1>Log In</h1>
      <form className={global.formWrapper}>
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
        <button
          onClick={signup}
          className={`${global.button} ${global.signup}`}
          type="button"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
