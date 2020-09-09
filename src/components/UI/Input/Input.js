import React from "react";

const Input = ({ text, placeholder, styles }) => {
  return (
    <div>
      <input type={text} placeholder={placeholder} style={{ ...styles }} />
    </div>
  );
};

export default Input;
