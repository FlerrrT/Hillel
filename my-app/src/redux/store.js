import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { hotelsReducer } from './reducers';
import { rootSaga } from './sagas';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  router: routerReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, routerMiddleware)
);

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;