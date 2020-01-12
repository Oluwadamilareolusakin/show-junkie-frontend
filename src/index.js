import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import './stylesheets/index.scss';

const store = createStore(rootReducer, applyMiddleware(
  thunk
));

const AppWrapper = () => {
  return (
    <Provider  store={store}>
      <App />
    </Provider>
  )
};

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));