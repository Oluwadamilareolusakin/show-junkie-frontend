import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    // handle errors
  }
};

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem('state');
    if (state) {
      const parsedState = JSON.parse(state);
      return parsedState;
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunk,
  ),
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));
