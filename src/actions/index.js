// TODO: add and export your own actions
import calculator from './calculator';

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
  return (dispatch, getState) => {
    dispatch(setCurrentValue(buttonValue));
    dispatch(sumValue(buttonValue));
  };
}
