import * as TYPES from '../actions/constants/carrierConstants';
import { mapKeys, omit } from 'lodash';

const initial_state = {
  isFetching: false,
  items: {},
  errors: null
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.REQUEST_CARRIER: {
      state = { ...state, isFetching: true, errors: null };
      break;
    }
    case TYPES.REQUEST_CARRIERS: {
      state = { ...state, isFetching: true, errors: null };
      break;
    }
    case TYPES.RECEIVE_CARRIER: {
      // action.payload = {carrier}
      state = { ...state, isFetching: false, items: { ...state.items, [action.payload._id]: action.payload }};
      break;
    }
    case TYPES.RECEIVE_CARRIERS: {
      // action.payload = [carrier, carrier, carrier]
      state = { ...state, isFetching: false, items: mapKeys(action.payload, '_id') };
      break;
    }
    case TYPES.DELETE_CARRIER: {
      // action.payload = id
      state = { ...state, items: omit(state.items, action.payload) };
      break;
    }
    case TYPES.SET_CARRIERS_ERRORS: {
      state = { ...state, errors: action.payload };
      break;
    }
    default: {}
  }
  return state;
}