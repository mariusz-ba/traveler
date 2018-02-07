import { combineReducers } from 'redux';

import authReducer from './authReducer';
import carriersReducer from './carriersReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  auth: authReducer,
  carriers: carriersReducer,
  map: mapReducer
});