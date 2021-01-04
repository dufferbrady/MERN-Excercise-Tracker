import React, { useContext } from "react";

import classes from "./login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import Register from "../Register/Register";

import { GlobalContext } from "../../context/GlobalState";

const Login = () => {
  const {
    registerModal,
    showRegisterModal,
    userRegisterVal,
    showUserValModal,
  } = useContext(GlobalContext);

  const login = (
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
              boxSizing: "border-box",
              margin: "15px 0 5px 0",
              borderRadius: "10px",
              border: "1px solid #DDDFE2",
              fontSize: "15px",
            }}
          />
          <Input
            text="text"
            placeholder="Password"
            styles={{
              width: "100%",
              padding: "15px 20px",
              boxSizing: "border-box",
              margin: "5px 0",
              borderRadius: "10px",
              border: "1px solid #DDDFE2",
              fontSize: "15px",
            }}
          />
          <Button
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
        </div>
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
      <Modal cancelModal={() => showUserValModal(false)} show={userRegisterVal}>
        {`User has been sucessfully added`}
      </Modal>
    </>
  );
};

export default Login;
