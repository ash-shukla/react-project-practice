import React, { useState } from "react";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { onChange, errorMessage, values, label, required, ...extra } = props;

  const handleFocusd = () => {
    setFocus(true);
  };
  return (
    <div className="form-input">
      <label className="form-label">{label}</label>
      <input
        {...extra}
        onChange={onChange}
        onBlur={handleFocusd}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
