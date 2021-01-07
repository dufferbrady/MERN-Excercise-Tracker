import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import classnames from "classnames";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";

import classes from "./Register.module.css";

import { GlobalContext } from "../../context/GlobalState";

function Register() {
  const { registerUser, errMsgs } = useContext(GlobalContext);

  const [firstName, setFirstName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(errMsgs);

  useEffect(() => {
    setErrors(errMsgs);
  }, [errMsgs]);

  const submitNewUserHandle = (e) => {
    e.preventDefault();

    let fullName = `${firstName} ${surName}`;
    let newUser = {
      firstName,
      surName,
      fullName,
      email,
      password: password1,
      password2,
    };

    registerUser(newUser).then((res) => {
      try {
        if (res.status === 200) {
          setFirstName("");
          setSurname("");
          setEmail("");
          setPassword1("");
          setPassword2("");
          setErrors(null);
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const validStyles = {
    flexGrow: 1,
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0px 5px 0",
    borderRadius: "10px",
    border: "1px solid #DDDFE2",
    fontSize: "15px",
  };

  const validStyles2 = {
    width: "100%",
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0 5px 0",
    borderRadius: "10px",
    border: "1px solid #DDDFE2",
    fontSize: "15px",
  };

  const inValidStyles = {
    flexGrow: 1,
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0px 5px 0",
    borderRadius: "10px",
    border: "1px solid red",
    fontSize: "15px",
  };

  const inValidStyles2 = {
    width: "100%",
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0px 5px 0",
    borderRadius: "10px",
    border: "1px solid red",
    fontSize: "15px",
  };

  return (
    <form onSubmit={submitNewUserHandle} className={classes.container}>
      <div className={classes.header}>
        <span style={{ fontSize: "30px", fontWeight: 600 }}>Sign up</span>
        <span style={{ fontSize: "20px" }}>It's quick and easy</span>
      </div>
      <div className={classes.namesBlock}>
        <div>
          <span style={{ color: "red" }}>{errMsgs.firstName}</span>
          <Input
            text="text"
            placeholder="First Name"
            value={firstName}
            change={(e) => setFirstName(e.target.value)}
            styles={!errMsgs.firstName ? validStyles : inValidStyles}
          />
        </div>
        <div>
          <span style={{ color: "red" }}>{errMsgs.surName}</span>
          <Input
            text="text"
            placeholder="Surname"
            value={surName}
            change={(e) => setSurname(e.target.value)}
            styles={!errMsgs.surName ? validStyles : inValidStyles}
          />
        </div>
      </div>
      <div>
        <span style={{ color: "red" }}>{errMsgs.email}</span>
        <Input
          text="text"
          placeholder="Email address"
          value={email}
          change={(e) => setEmail(e.target.value)}
          styles={!errMsgs.email ? validStyles2 : inValidStyles2}
        />
      </div>
      <span style={{ color: "red" }}>{errMsgs.password}</span>
      <Input
        text="text"
        placeholder="Password"
        value={password1}
        change={(e) => setPassword1(e.target.value)}
        styles={!errMsgs.password ? validStyles2 : inValidStyles2}
      />
      <span style={{ color: "red" }}>{errMsgs.password2}</span>
      <Input
        text="text"
        placeholder="Confirm Password"
        value={password2}
        change={(e) => setPassword2(e.target.value)}
        styles={!errMsgs.password2 ? validStyles2 : inValidStyles2}
      />
      <Button
        text={"Signup"}
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
    </form>
  );
}

export default withRouter(Register);
