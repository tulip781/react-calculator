const currentValueReducer = (state, action) => {
  if (state === undefined) {
    return 0;
  }
  // TO DO handle actions
  switch (action.type) {
    case 'SET_CURRENT_VALUE':
      state = state + action.payload;
      return state;
    default:
      return state;
  }
};
export default currentValueReducer;
