import React, { useState } from "react";
import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const Login = () => {
  const navigate = useNavigate();

  // const { handleSubmit, handleChange, userLogin, errorsLogin } =
  //   useForm(validate);

  const login = () => {
    // loginx();
    // localStorage.setItem("token", "randomValue");
    // navigate("/dashboard/todoapp");
  };

  const signup = () => {
    navigate("/signup");
  };

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [errorsLogin, setErrorsLogin] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
    setErrorsLogin(validate(userLogin));
  };

  const validate = (values, getUserArr) => {
    let error = {};

    // Email
    if (!values.email) {
      error.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      error.email = "Email is not valid";
    }

    // password
    if (!values.password) {
      error.password = "Password is Required";
    } else if (values.password.length < 4) {
      error.password = "password must be more than 3 charactor";
    } else if (values.password.length > 10) {
      error.password = "password cannot exceed more than 10 charactor";
    }

    return error;
  };

  const handleSubmit = (e) => {
    // const loginErrorValidate = validate(userLogin);

    e.preventDefault();

    let loginValue = [];

    Object.entries(userLogin).map(([key, el]) => {
      if (el !== "") {
        loginValue.push(false);
      } else {
        loginValue.push(true);
      }
    });

    console.log(loginValue);

    if (loginValue.includes(true)) {
      setErrorsLogin(validate(userLogin));
      alert("please fill the form");
    } else {
      const getUserArr = localStorage.getItem("signupvalue");
      console.log("getUserArr", getUserArr);

      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        console.log(userData);
        const userLoginNew = userData.filter((e, i) => {
          return (
            e.email === userLogin.email && e.password === userLogin.password
          );
        });

        console.log(userLoginNew);

        if (userLoginNew.length === 0) {
          alert("Invalid Details");
        } else {
          setIsSubmit(true);
          localStorage.setItem("token", "randomValue");
          setTimeout(() => {
            navigate("/dashboard/todoapp");
          }, 2000);
        }
      }
    }
  };

  return (
    <div className={global.formWrapperBlock}>
      {isSubmit && <p style={{ color: "green" }}>Successfull Login</p>}
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
