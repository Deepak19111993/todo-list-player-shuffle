const validateInfo = (values) => {
  let error = {};

  console.log(values);

  // name
  if (!values.firstname) {
    error.firstname = "First Name is Required";
  } else if (values.firstname.length < 2) {
    error.firstname = "letter must be more than 1 letter";
  }

  if (!values.lastname) {
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

export default validateInfo;
