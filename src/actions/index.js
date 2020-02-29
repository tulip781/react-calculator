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
    console.log(getState().sum.toString());
    dispatch(setCurrentValue(buttonValue));
    dispatch(sumValue(buttonValue));
  };
}

export function calcAndDisplay(buttonValue) {
  return (dispatch, getState) => {
    let answer = {};
    eval(getState().sum)
    sumValue(buttonValue);
    dispatch(setCurrentValue(buttonValue));
    dispatch(sumValue(buttonValue));
  };
}

