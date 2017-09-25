import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas'
import reducer from './reducers';

export default () => {

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

  const store = createStore(
    reducer,
    this.state,
    enhancers
  );

  saga.map(sagaMiddleware.run);

  return store;

}
