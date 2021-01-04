import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  workouts: [
    { name: "Workout A", date: "Tue, 25 Aug", _id: "1234" },
    { name: "Workout B", date: "Thur, 27 Aug", _id: "1234" },
    { name: "Workout A", date: "Sat, 29 Aug", _id: "1234" },
  ],
  registerModal: false,
  userRegisterVal: false,
  loadingUser: false,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function addUser(newUser) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let res = await axios.post(
        "http://localhost:5001/users/register",
        newUser,
        config
      );
      let data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
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
  function registerUser(val) {
    dispatch({
      type: "USER_VALIDATED",
      payload: val,
    });
  }

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
        workouts: state.workouts,
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
