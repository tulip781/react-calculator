const sumReducer = (state = 0, action) => {
  // TO DO handle actions
  let sum;
  switch (action.type) {
    case 'SUM_VALUE':
      sum = state + action.payload;
      return sum;
    default:
      return state;
  }
};
export default sumReducer;
