import React from "react";

import classes from "./login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const Login = () => {
  return (
    <div className={classes.login_container}>
      <div className={classes.recent_logins}>Recent Logins</div>
      <div className={classes.login_form}>
        <div className={classes.input_container}>
          <Input
            text="text"
            placeholder="Enter email address or username"
            styles={{
              width: "100%",
              padding: "15px 20px",
              "box-sizing": "border-box",
              margin: "15px 0 5px 0",
              "border-radius": "10px",
              border: "1px solid #DDDFE2",
              "font-size": "15px",
            }}
          />
          <Input
            text="text"
            placeholder="Password"
            styles={{
              width: "100%",
              padding: "15px 20px",
              "box-sizing": "border-box",
              margin: "5px 0",
              "border-radius": "10px",
              border: "1px solid #DDDFE2",
              "font-size": "15px",
            }}
          />
          <Button
            text="Log In"
            styles={{
              width: "100%",
              padding: "15px 20px",
              "box-sizing": "border-box",
              margin: "5px 0",
              "border-radius": "10px",
              border: "1px solid #DDDFE2",
              "font-size": "15px",
              background: "#002524",
              color: "white",
              "letter-spacing": "1px",
              "font-weight": "600",
            }}
          />
        </div>
        <div className={classes.forgotten_account}>
          <span>Forgotten Account?</span>
        </div>
        <div className={classes.create_account}>
          <Button
            text="Create Account"
            styles={{
              width: "100%",
              padding: "15px 20px",
              "box-sizing": "border-box",
              margin: "5px 0",
              "border-radius": "10px",
              border: "1px solid #DDDFE2",
              "font-size": "15px",
              background: "#00a8a3",
              color: "white",
              "letter-spacing": "1px",
              "font-weight": "600",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
