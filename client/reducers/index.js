import { combineReducers } from 'redux';

import authReducer from './authReducer';
import carriersReducer from './carriersReducer';
import mapReducer from './mapReducer';
import stopsReducer from './stopsReducer';

export default combineReducers({
  auth: authReducer,
  carriers: carriersReducer,
  map: mapReducer,
  stops: stopsReducer
});