import React from "react";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import classes from "./Register.module.css";

function Register() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span style={{ fontSize: "30px", fontWeight: 600 }}>Sign up</span>
        <span style={{ fontSize: "20px" }}>It's quick and easy</span>
      </div>
      <div className={classes.namesBlock}>
        <Input
          text="text"
          placeholder="First Name"
          styles={{
            flexGrow: 1,
            padding: "15px 20px",
            boxSizing: "border-box",
            margin: "15px 0px 5px 0",
            borderRadius: "10px",
            border: "1px solid #DDDFE2",
            fontSize: "15px",
          }}
        />
        <Input
          text="text"
          placeholder="Surname"
          styles={{
            flexGrow: 1,
            padding: "15px 20px",
            boxSizing: "border-box",
            margin: "15px 0 5px 10px",
            borderRadius: "10px",
            border: "1px solid #DDDFE2",
            fontSize: "15px",
          }}
        />
      </div>
      <Input
        text="text"
        placeholder="Email address"
        styles={{
          width: "100%",
          padding: "15px 20px",
          boxSizing: "border-box",
          margin: "15px 0 5px 0",
          borderRadius: "10px",
          border: "1px solid #DDDFE2",
          fontSize: "15px",
          flexGrow: 1,
        }}
      />
      <Input
        text="text"
        placeholder="Password"
        styles={{
          width: "100%",
          padding: "15px 20px",
          boxSizing: "border-box",
          margin: "15px 0 5px 0",
          borderRadius: "10px",
          border: "1px solid #DDDFE2",
          fontSize: "15px",
        }}
      />
      <Input
        text="text"
        placeholder="Confirm Password"
        styles={{
          width: "100%",
          padding: "15px 20px",
          boxSizing: "border-box",
          margin: "15px 0 5px 0",
          borderRadius: "10px",
          border: "1px solid #DDDFE2",
          fontSize: "15px",
        }}
      />
      <Button
        text="SIGN UP"
        styles={{
          width: "100%",
          padding: "15px 20px",
          boxSizing: "border-box",
          margin: "5px 0",
          borderRadius: "10px",
          border: "1px solid #DDDFE2",
          fontSize: "15px",
          background: "#00a8a3",
          color: "white",
          letterSpacing: "1px",
          fontWeight: "600",
        }}
      />
    </div>
  );
}

export default Register;
