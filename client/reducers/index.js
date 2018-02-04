import { combineReducers } from 'redux';

import carriersReducer from './carriersReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  carriers: carriersReducer,
  map: mapReducer
});