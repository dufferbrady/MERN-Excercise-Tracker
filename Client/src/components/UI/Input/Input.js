import React from "react";

const Input = ({ text, placeholder, styles, value, change }) => {
  return (
    <div>
      <input
        onChange={change}
        value={value}
        type={text}
        placeholder={placeholder}
        style={{ ...styles }}
      />
    </div>
  );
};

export default Input;
