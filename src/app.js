import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header';
import { AppRouter } from './routes/AppRouter';

const store = configureStore();


const App = (
  <Provider store={store}>
    <Header />
    <AppRouter />
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));