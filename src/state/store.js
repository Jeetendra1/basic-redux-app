import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';

export const strore = createStore(reducers, {}, applyMiddleware(thunk));