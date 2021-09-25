import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.scss';
import App from './App.jsx';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);