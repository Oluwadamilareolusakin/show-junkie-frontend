import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const store = createStore(rootReducer);

const AppWrapper = () => {
  return (
    <Provider  store={store}>
      <App />
    </Provider>
  )
};

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));