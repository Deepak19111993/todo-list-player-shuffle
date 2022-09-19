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
    e.preventDefault();
    setErrorsSignup(validate(userSignup));
    setErrorsLogin(validate(userLogin));
    // Object.keys(errors).length ? setIsSubmit(false) : setIsSubmit(true);
    setIsSubmit(true);
    if (Object.keys(errorsSignup).length === 0 && isSubmit) {
      navigate("/");
    }
    if (Object.keys(errorsLogin).length === 0 && isSubmit) {
      navigate("/dashboard/todoapp");
    }
    localStorage.setItem("value", JSON.stringify(userSignup));
    console.log(isSubmit);
  };

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
