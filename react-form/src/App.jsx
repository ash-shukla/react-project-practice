import React, { useState } from "react";
import "./App.css";
import FormInput from "./FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries())); // THIS IS AN IMPORTANT WAY OF HANDLING FORM DATA
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username is required and should have atleast 5-10 characters",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Please enter a valid email address",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      label: "Phone",
      errorMessage: "Phone number is required and should be 10 digits only",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password must be 8-15 characters and one special character",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Conform password does not match the password",
      patter: values.password,
      required: true,
    },
  ];

  // const handleSubmit = () => {};
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
