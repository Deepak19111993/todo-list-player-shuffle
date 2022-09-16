import React, { useState } from "react";
// import validate from "./validateInfo";

const useForm = (validate) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUserDetail(user);
    // navigate("/");

    setErrors(validate(user));
    console.log(user);
  };

  return { handleSubmit, handleChange, errors, user };
};

export default useForm;
