import './index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import reducers from '../reducers/index';
import SagaManager from '../sagas/SagaManager';
import './index.less';

//////////////////////
// Store

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(combineReducers({
  ...reducers, routing,
}), initialState, enhancer);
SagaManager.startSagas(sagaMiddleware);

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const reducers = require('../reducers');
    const combinedReducers = combineReducers({ ...reducers, routing });
    store.replaceReducer(combinedReducers);
  });
  module.hot.accept('../sagas/SagaManager', () => {
    SagaManager.cancelSagas(store);
    require('../sagas/SagaManager').default.startSagas(sagaMiddleware);
  });
}

//////////////////////
// Render

const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  const Routes = require('../routes/index');
  ReactDOM.render(
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  , document.getElementById('root'));
};

if (module.hot) {
  const renderNormally = render;
  const renderException = (error) => {
    const RedBox = require('redbox-react');
    ReactDOM.render(<RedBox error={error} />, document.getElementById('root'));
  };
  render = () => {
    try {
      renderNormally();
    } catch (error) {
      console.error('error', error);
      renderException(error);
    }
  };
  module.hot.accept('../routes/index', () => {
    render();
  });
}

render();
