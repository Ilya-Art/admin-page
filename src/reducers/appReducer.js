import * as reducers from './reducers';
import { combineReducers } from 'redux';

const appReducer = combineReducers(reducers);

export default appReducer;
