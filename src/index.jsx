// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import currentValueReducer from "./reducers/current_value_reducer";
import sumReducer from "./reducers/sum_reducer";
import calculationReducer from "./reducers/calculation_reducer";

// State and reducers
const reducers = combineReducers({
  currentValue: currentValueReducer,
  calculation: calculationReducer,
  sum: sumReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
