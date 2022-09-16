import React, { useState } from "react";
// import styled from "./Login.module.scss";
import global from "../../Global.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import useForm from "../../useForm";
// import validate from "../../validateInfo";

const SignUp = () => {
  const navigate = useNavigate();

  // const { user, errors, handleChange, handleSubmit } = useForm(validate);

  // console.log("user", user, handleSubmit, validate);

  const [user, setUser] = useState({
    firstname: "",
    // lastname: "",
    email: "",
    // password: "",
    // confirmpassword: "",
  });

  // const [userDetail, setUserDetail] = useState();
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
    setErrors(validate(user));
  };

  useEffect(() => {
    console.log(errors);
    setTimeout(() => {
      if (Object.keys(errors).length === 0 && isSubmit) {
        // console.log(user);
        navigate("/");
      }
    }, 1000);
  }, [errors]);

  console.log(Object.keys(errors));

  const validate = (values) => {
    let error = {};

    // console.log(values);

    // name
    if (!values.firstname.trim()) {
      error.firstname = "First Name is Required";
    } else if (values.firstname.length < 2) {
      error.firstname = "letter must be more than 1 letter";
    }

    if (!values.lastname.trim()) {
      error.lastname = "Last Name is Required";
    } else if (values.lastname.length < 2) {
      error.lastname = "letter must be more than 1 letter";
    }

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

    // confirm pasword
    if (values.password !== values.confirmpassword) {
      error.confirmpassword = "not match password";
    }

    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(user));
    setIsSubmit(true);
  };
  console.log(user, errors);

  return (
    <div className={global.formWrapperBlock}>
      {isSubmit && <p style={{ color: "green" }}>Successfull Sign Up</p>}
      <h1>Sign Up</h1>
      <form noValidate onSubmit={handleSubmit} className={global.formWrapper}>
        <div className={global.field}>
          <label>First Name</label>
          <input
            value={user.firstname}
            onChange={handleChange}
            onBlur={handleChange}
            name="firstname"
            type="text"
            placeholder="Enter First Name"
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className={global.field}>
          <label>Last Name</label>
          <input
            value={user.lastname}
            onChange={handleChange}
            onBlur={handleChange}
            name="lastname"
            type="text"
            placeholder="Enter Last Name"
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className={global.field}>
          <label>E-mail</label>
          <input
            value={user.email}
            onChange={handleChange}
            onBlur={handleChange}
            name="email"
            type="email"
            placeholder="Enter E-mail"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className={global.field}>
          <label>Password</label>
          <input
            value={user.password}
            onChange={handleChange}
            onBlur={handleChange}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className={global.field}>
          <label>Confirm Password</label>
          <input
            value={user?.confirmpassword}
            onChange={handleChange}
            onBlur={handleChange}
            name="confirmpassword"
            type="password"
            placeholder="Enter Confirm Password"
          />
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>
        {Object.keys(errors).length === 0 && (
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
