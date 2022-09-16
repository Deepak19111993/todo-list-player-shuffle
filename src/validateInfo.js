const validateInfo = (values) => {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = "First Name is Required";
  }

  // Email
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email is requird";
  }
};

export default validateInfo;
