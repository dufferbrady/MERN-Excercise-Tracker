export default (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        registerModal: action.payload,
      };
    default:
      return state;
  }
};
