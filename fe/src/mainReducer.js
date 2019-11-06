import { combineReducers } from 'redux';
import app from './containers/App/reducers';

const mainReducer = combineReducers({
  app,
});

export default mainReducer;
