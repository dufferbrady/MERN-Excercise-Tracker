import React, { createContext, useReducer } from "react";

import jwt_decode from "jwt-decode";

import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  workouts: [
    { name: "Workout A", date: "Tue, 25 Aug", _id: "1234" },
    { name: "Workout B", date: "Thur, 27 Aug", _id: "1234" },
    { name: "Workout A", date: "Sat, 29 Aug", _id: "1234" },
  ],
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

  function setAuthToken(token) {
    if (token) {
      try {
        // Apply authorization token to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
      } catch (error) {
        console.log(error);
      }
    } else {
      // Delete auth header
      delete axios.defaults.headers.common["Authorization"];
    }
  }

  // Register User
  async function registerUser(userData) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await axios.post(
        "http://localhost:5001/users/register",
        userData,
        config
      );
      showRegisterModal(false);
      resetErrMsgs();
      return response;
    } catch (err) {
      console.log("inside catch");
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data,
      });
    }
  }

  // Login - get user token
  async function loginUser(userData, history) {
    await axios
      .post("http://localhost:5001/users/login", userData)
      .then((res) => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);

        // Set token to Auth header
        setAuthToken(token);

        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        setCurrentUser(decoded);
        history.push("/");
      })
      .catch((err) =>
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data,
        })
      );
  }

  // Set logged in user
  function setCurrentUser(decoded) {
    dispatch({
      type: "SET_CURRENT_USER",
      payload: decoded,
    });
  }

  // User loading
  function setUserLoading() {
    return {
      type: "USER_LOADING",
    };
  }

  // Log user out
  function logoutUser() {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    setCurrentUser({});
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

  //Action
  function resetErrMsgs() {
    dispatch({
      type: "RESET_ERRORS",
    });
  }

  //Actions
  // function startLoader(val) {
  //   dispatch({
  //     type: "START_LOADER",
  //     payload: val,
  //   });
  // }

  return (
    <GlobalContext.Provider
      value={{
        workouts: state.workouts,
        errMsgs: state.errMsgs,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        registerModal: state.registerModal,
        userRegisterVal: state.userRegisterVal,
        loadingUser: state.loadingUser,
        showRegisterModal,
        showUserValModal,
        registerUser,
        loginUser,
        logoutUser,
        setUserLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
