import * as TYPES from '../actions/constants/mapConstants';

const initial_state = {
  // Center properyt describes what location
  // map is currently focusing
  center: {
    lat: 50.0646501,
    lng: 19.9449799
  },
  // Zoom
  zoom: 0,
  // Markers
  markers: []
}

export default function reducer(state = initial_state, action) {
  switch(action.type) {
    case TYPES.CENTER_MAP: {
      // action.payload =  {lat: ..., lng: ...}
      state = { ...state, center: action.payload };
      break;
    }
    default: {}
  }
  return state;
}