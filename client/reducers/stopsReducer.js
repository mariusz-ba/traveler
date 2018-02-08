import * as TYPES from '../actions/constants/stopsConstants';
import {mapKeys} from 'lodash';

const initial_state = {
  isFetching: false,
  items: {},
  errors: null
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.REQUEST_STOP: {
      state = { ...state, isFetching: true };
      break;
    }
    case TYPES.REQUEST_STOPS: {
      state = { ...state, isFetching: true };
      break;
    }
    case TYPES.RECEIVE_STOP: {
      // action.payload = {stop}
      state = { ...state, isFetching: false, items: { ...state.items, [action.payload._id]: action.payload }};
      break;
    }
    case TYPES.RECEIVE_STOPS: {
      // action.payload = [stop, stop, stop]
      state = { ...state, isFetching: false, items: mapKeys(action.payload, '_id') };
      break;
    }
    case TYPES.SET_STOPS_ERRORS: {
      // action.payload = {errors}
      state = { ...state, errors: action.payload };
      break;
    }
    default: {}
  }
  return state;
}