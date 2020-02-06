const sumReducer = (state, action) => {
  if (state === undefined) {
    return 0;
  }
  // TO DO handle actions
  switch (action.type) {
    case 'SUM_VALUE':
      return action.payload;
    default:
      return state;
  }
};
export default sumReducer;
