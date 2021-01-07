import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Register from "../Register/Register";

import { GlobalContext } from "../../context/GlobalState";

function Login() {
  const { registerModal, showRegisterModal, loginUser, errMsgs } = useContext(
    GlobalContext
  );

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUserHandle = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    loginUser(userData, history).then((res) => {
      console.log(res);
      try {
        if (res.status === 200) {
          setEmail("");
          setPassword("");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const validStyle = {
    width: "100%",
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0 5px 0",
    borderRadius: "10px",
    border: "1px solid #DDDFE2",
    fontSize: "15px",
  };

  const inValidStyle = {
    width: "100%",
    padding: "15px 20px",
    boxSizing: "border-box",
    margin: "15px 0 5px 0",
    borderRadius: "10px",
    border: "1px solid red",
    fontSize: "15px",
  };

  const login = (
    <div className={classes.login_container}>
      <div className={classes.recent_logins}>Recent Logins</div>
      <div className={classes.login_form}>
        <form className={classes.input_container} onSubmit={loginUserHandle}>
          <span style={{ color: "red" }}>{errMsgs.email}</span>
          <span style={{ color: "red" }}>{errMsgs.emailnotfound}</span>
          <Input
            change={(e) => setEmail(e.target.value)}
            text="text"
            placeholder="Enter email address or username"
            styles={!errMsgs.email ? validStyle : inValidStyle}
          />
          <span style={{ color: "red" }}>{errMsgs.password}</span>
          <span style={{ color: "red" }}>{errMsgs.passwordincorrect}</span>
          <Input
            change={(e) => setPassword(e.target.value)}
            text="text"
            placeholder="Password"
            styles={!errMsgs.password ? validStyle : inValidStyle}
          />
          <Button
            clickFunction={loginUserHandle}
            text="Log In"
            styles={{
              width: "100%",
              padding: "15px 20px",
              boxSizing: "border-box",
              margin: "5px 0",
              borderRadius: "10px",
              border: "1px solid #DDDFE2",
              fontSize: "15px",
              background: "#002524",
              color: "white",
              letterSpacing: "1px",
              fontWeight: "600",
            }}
          />
        </form>
        <div className={classes.forgotten_account}>
          <span>Forgotten Account?</span>
        </div>
        <div className={classes.create_account}>
          <Button
            clickFunction={() => showRegisterModal(true)}
            text="Create Account"
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
      </div>
    </div>
  );
  return (
    <>
      {login}
      <Modal cancelModal={() => showRegisterModal(false)} show={registerModal}>
        <Register />
      </Modal>
      {/* <Modal cancelModal={() => showUserValModal(false)} show={userRegisterVal}>
        {`User has been sucessfully added`}
      </Modal> */}
    </>
  );
}

export default Login;
