import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { AppRouter } from './routes/AppRouter';
import Header from './components/Header';
import SecondHeader from './components/SecondHeader';
import Footer from './components/Footer';

const store = configureStore();


const App = (
  <Provider store={store}>
    <div className='card'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));