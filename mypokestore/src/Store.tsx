import { applyMiddleware, Store, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { state } from './reducers';

/**
 * This is just the bootstrapping of the redux store to the document
 * for usage with React.
 * 
 */

const a: any = window;
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk, logger)
);

export const store: Store<any> = createStore(
    state,
    enhancer
);