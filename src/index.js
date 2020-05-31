import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App/index';
import LocaleProvider from './intl-provider';
import rootSaga from './sagas/index';
import reducers from './reducers';

import 'antd/dist/antd.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const Root = ({ store }) => (
  <LocaleProvider>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </LocaleProvider>
);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
