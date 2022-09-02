import React from "react";

const FormInput = (props) => {
  const { placeholder, name } = props;
  return (
    <div className="form-input">
      <label className="form-label">Username</label>
      <input name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
