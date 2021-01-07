import React, { createContext, useReducer } from "react";

import jwt_decode from "jwt-decode";

import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  errMsgs: {},
  isAuthenticated: false,
  user: {},
  loadingUser: false,
  registerModal: false,
  userRegisterVal: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAuthToken = async (token) => {
    if (token) {
      // Apply authorization token to every request if logged in
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // Register User
  async function registerUser(userData) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "http://localhost:5001/users/register",
        userData,
        config
      );
      showRegisterModal(false);
    } catch (err) {
      console.log("inside catch");
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    }
  }

  // Actions
  async function addUser(newUser) {
    console.log(newUser);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // try {
    //   let res = await axios.post(
    //     "http://localhost:5001/users/register",
    //     newUser,
    //     config
    //   );
    //   let data = res.data;
    //   return data;
    // } catch (error) {
    //   console.log(error);
    // }
  }

  //Actions
  function showRegisterModal(val) {
    dispatch({
      type: "SHOW_REGISTER_MODAL",
      payload: val,
    });
  }

  //Actions
  function showUserValModal(val) {
    dispatch({
      type: "SHOW_USERVAL_MODAL",
      payload: val,
    });
  }

  //Actions
  // function registerUser(val) {
  //   dispatch({
  //     type: "USER_VALIDATED",
  //     payload: val,
  //   });
  // }

  //Actions
  function startLoader(val) {
    dispatch({
      type: "START_LOADER",
      payload: val,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        errMsgs: state.errMsgs,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        registerModal: state.registerModal,
        userRegisterVal: state.userRegisterVal,
        loadingUser: state.loadingUser,
        showRegisterModal,
        showUserValModal,
        registerUser,
        addUser,
        startLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
