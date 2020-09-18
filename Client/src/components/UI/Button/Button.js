import React from "react";

const Button = ({ text, styles, clickFunction }) => {
  return (
    <div>
      <button onClick={clickFunction} style={{ ...styles }}>
        {text}
      </button>
    </div>
  );
};

export default Button;
