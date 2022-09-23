import React, { useState } from "react";
// import validate from "./validateInfo";
import { Link, useNavigate } from "react-router-dom";

const useForm = (validate) => {
  const navigate = useNavigate();
  const [userSignup, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [errorsSignup, setErrorsSignup] = useState({});
  const [errorsLogin, setErrorsLogin] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...userSignup,
      [name]: value,
    });
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
    setErrorsSignup(validate(userSignup));
    setErrorsLogin(validate(userLogin));
  };

  const handleSubmit = (e) => {
    const signupErrorValidate = validate(userSignup);
    const loginErrorValidate = validate(userSignup);
    e.preventDefault();
    setErrorsSignup(validate(userSignup));
    setErrorsLogin(validate(userLogin));
    if (Object.keys(signupErrorValidate).length === 0) {
      setIsSubmit(true);
      localStorage.setItem(
        "signupvalue",
        JSON.stringify([...data, userSignup])
      );
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (Object.keys(loginErrorValidate).length === 0) {
      setIsSubmit(true);
      const getUserArr = localStorage.getItem("signupvalue");
      console.log("getUserArr", getUserArr);
      setTimeout(() => {
        navigate("/dashboard/todoapp");
      }, 2000);
    }
  };
  // console.log(isSubmit, Object.keys(errorsSignup).length);

  return {
    handleSubmit,
    handleChange,
    errorsSignup,
    errorsLogin,
    userSignup,
    userLogin,
    isSubmit,
  };
};

export default useForm;
