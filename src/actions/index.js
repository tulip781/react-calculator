// TODO: add and export your own actions
export function setCurrentValue(buttonValue) {
  return {
    type: "SET_CURRENT_VALUE",
    payload: buttonValue
  };
}

export function sumValue(buttonValue) {
  return {
    type: "SUM_VALUE",
    payload: buttonValue
  };
}


export function setCurrentValueAndSum(buttonValue) {
  return dispatch => {
    dispatch(setCurrentValue(buttonValue));
    dispatch(sumValue(buttonValue));
  };
}
