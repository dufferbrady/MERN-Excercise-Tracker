import React from "react";

const Button = ({ text, styles }) => {
  return (
    <div>
      <button style={{ ...styles }}>{text}</button>
    </div>
  );
};

export default Button;
