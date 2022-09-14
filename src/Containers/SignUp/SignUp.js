import React from "react";
// import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={global.formWrapper}>
      <div className={global.field}>
        <label>First Name</label>
        <input name="firstname" type="text" placeholder="Enter First Name" />
      </div>
      <div className={global.field}>
        <label>Last Name</label>
        <input name="lastname" type="text" placeholder="Enter Last Name" />
      </div>
      <div className={global.field}>
        <label>Password</label>
        <input name="password" type="password" placeholder="Enter Password" />
      </div>
      <div className={global.field}>
        <label>Confirm Password</label>
        <input
          name="confirmpassword"
          type="password"
          placeholder="Enter Confirm Password"
        />
      </div>
      <Link to="/dashboard" className={global.button} type="button">
        Sign Up
      </Link>
    </div>
  );
};

export default SignUp;
