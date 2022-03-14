import { createStore, compose } from 'redux';

import mainReducer from '../reducers/main';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
  const store = createStore(mainReducer, composeEnhancers());

  return store;
};