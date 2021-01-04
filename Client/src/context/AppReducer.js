export default (state, action) => {
  switch (action.type) {
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
