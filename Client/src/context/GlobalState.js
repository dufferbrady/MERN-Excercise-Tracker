import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  workouts: [
    { name: "Workout A", date: "Tue, 25 Aug", _id: "1234" },
    { name: "Workout B", date: "Thur, 27 Aug", _id: "1234" },
    { name: "Workout A", date: "Sat, 29 Aug", _id: "1234" },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  //   function deleteTransaction(id) {
  //     dispatch({
  //       type: 'DELETE_TRANSACTION',
  //       payload: id
  //     });
  //   }

  return (
    <GlobalContext.Provider
      value={{
        workouts: state.workouts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
