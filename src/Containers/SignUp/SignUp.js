import React, { useState } from "react";
// import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const SignUp = () => {
  // const navigate = useNavigate();

  const { userSignup, errorsSignup, handleChange, handleSubmit, isSubmit } =
    useForm(validate);

  // console.log("user", user, handleSubmit, validate);

  // const [user, setUser] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  // });

  // // const [userDetail, setUserDetail] = useState();
  // const [errors, setErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setUser({
  //     ...user,
  //     [name]: value,
  //   });
  //   setErrors(validate(user));
  // };

  // useEffect(() => {
  //   console.log(errors);
  //   // setTimeout(() => {
  //   //   if (Object.keys(errors).length === 0 && isSubmit) {
  //   //     // console.log(user);
  //   //     navigate("/");
  //   //   }
  //   //   return () => {
  //   //     clearTimeout();
  //   //   };
  //   // }, 2000);
  // }, [errors]);

  // console.log(Object.keys(errors));

  // const validate = (values) => {
  //   let error = {};

  //   // console.log(values);

  //   // name
  //   if (!values.firstname) {
  //     error.firstname = "First Name is Required";
  //   } else if (values.firstname.length < 2) {
  //     error.firstname = "letter must be more than 1 letter";
  //   }

  //   if (!values.lastname) {
  //     error.lastname = "Last Name is Required";
  //   } else if (values.lastname.length < 2) {
  //     error.lastname = "letter must be more than 1 letter";
  //   }

  //   // Email
  //   if (!values.email) {
  //     error.email = "Email is required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     error.email = "Email is not valid";
  //   }

  //   // password
  //   if (!values.password) {
  //     error.password = "Password is Required";
  //   } else if (values.password.length < 4) {
  //     error.password = "password must be more than 3 charactor";
  //   } else if (values.password.length > 10) {
  //     error.password = "password cannot exceed more than 10 charactor";
  //   }

  //   // confirm pasword
  //   if (values.password !== values.confirmpassword) {
  //     error.confirmpassword = "not match password";
  //   }

  //   return error;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(validate(user));
  //   // Object.keys(errors).length ? setIsSubmit(false) : setIsSubmit(true);
  //   setIsSubmit(true);
  //   if (Object.keys(errors).length === 0 && isSubmit) {
  //     navigate("/");
  //   }
  //   localStorage.setItem("value", JSON.stringify(user));
  //   console.log(isSubmit);
  // };

  console.log(userSignup, errorsSignup, Object.keys(errorsSignup).length);

  return (
    <div className={global.formWrapperBlock}>
      {Object.keys(errorsSignup).length === 0 && isSubmit && (
        <p style={{ color: "green" }}>Successfull Sign Up</p>
      )}
      <h1>Sign Up</h1>
      <form noValidate onSubmit={handleSubmit} className={global.formWrapper}>
        <div className={global.field}>
          <label>First Name</label>
          <input
            value={userSignup.firstname}
            onChange={handleChange}
            onBlur={handleChange}
            name="firstname"
            type="text"
            placeholder="Enter First Name"
          />
          {errorsSignup.firstname && <p>{errorsSignup.firstname}</p>}
        </div>
        <div className={global.field}>
          <label>Last Name</label>
          <input
            value={userSignup.lastname}
            onChange={handleChange}
            onBlur={handleChange}
            name="lastname"
            type="text"
            placeholder="Enter Last Name"
          />
          {errorsSignup.lastname && <p>{errorsSignup.lastname}</p>}
        </div>
        <div className={global.field}>
          <label>E-mail</label>
          <input
            value={userSignup.email}
            onChange={handleChange}
            onBlur={handleChange}
            name="email"
            type="email"
            placeholder="Enter E-mail"
          />
          {errorsSignup.email && <p>{errorsSignup.email}</p>}
        </div>
        <div className={global.field}>
          <label>Password</label>
          <input
            value={userSignup.password}
            onChange={handleChange}
            onBlur={handleChange}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          {errorsSignup.password && <p>{errorsSignup.password}</p>}
        </div>
        <div className={global.field}>
          <label>Confirm Password</label>
          <input
            value={userSignup.confirmpassword}
            onChange={handleChange}
            onBlur={handleChange}
            name="confirmpassword"
            type="password"
            placeholder="Enter Confirm Password"
          />
          {errorsSignup.confirmpassword && (
            <p>{errorsSignup.confirmpassword}</p>
          )}
        </div>
        {Object.keys(errorsSignup).length === 0 && (
          <button
            // onClick={submit}
            className={global.button}
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
