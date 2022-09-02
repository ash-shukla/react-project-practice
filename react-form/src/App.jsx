import React from "react";
import "./App.css";
import FormInput from "./FormInput";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        <FormInput name="email" placeholder="Email" />
        <FormInput name="fullName" placeholder="Full Name" />
        <FormInput name="phone" placeholder="Phone" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
