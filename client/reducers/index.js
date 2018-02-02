import { combineReducers } from 'redux';

import carriersReducer from './carriersReducer';

export default combineReducers({
  carriers: carriersReducer
});