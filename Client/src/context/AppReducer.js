const isEmpty = require("is-empty");

export default (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case "USER_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_ERRORS":
      return {
        ...state,
        errMsgs: action.payload,
      };

    //Old reducers
    case "SHOW_REGISTER_MODAL":
      return {
        ...state,
        registerModal: action.payload,
      };
    case "SHOW_USERVAL_MODAL":
      return {
        ...state,
        userRegisterVal: action.payload,
      };
    case "USER_VALIDATED":
      return {
        ...state,
        userRegisterVal: action.payload,
        registerModal: false,
      };
    case "START_LOADER":
      return {
        ...state,
        loadingUser: action.payload,
      };
    default:
      return state;
  }
};
