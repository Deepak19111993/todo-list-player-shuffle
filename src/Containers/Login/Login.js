import React from "react";
import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const Login = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, userLogin, errorsLogin } =
    useForm(validate);

  const login = () => {
    // loginx();
    localStorage.setItem("token", "randomValue");
    // navigate("/dashboard/todoapp");
  };

  const signup = () => {
    navigate("/signup");
  };

  console.log(userLogin);

  return (
    <div className={global.formWrapperBlock}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} className={global.formWrapper}>
        <div className={global.field}>
          <label>Email</label>
          <input
            value={userLogin.email}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Enter Email"
          />
          {errorsLogin.email && <p>{errorsLogin.email}</p>}
        </div>
        <div className={global.field}>
          <label>Password</label>
          <input
            value={userLogin.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          {errorsLogin.password && <p>{errorsLogin.password}</p>}
        </div>
        <button onClick={login} className={global.button} type="submit">
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
