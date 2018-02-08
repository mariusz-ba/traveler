import * as TYPES from './constants/stopsConstants';
import axios from 'axios';

/**
 * Fetching multiple stops
 * @param {Object} filter Filter object
 */
export const fetchStops = (filter) => {
  return dispatch => {
    dispatch(requestStops(filter));
    return axios.get(`/api/stops`, { params: filter })
      .then(response => dispatch(receiveStops(response.data)))
      .catch(err => dispatch(setStopsErrors(err.response.data)))
  }
}

export const requestStops = (filter) => ({
  type: TYPES.REQUEST_STOPS,
  payload: filter
})

export const receiveStops = (stops) => ({
  type: TYPES.RECEIVE_STOPS,
  payload: stops
})

/**
 * Fetching single stop
 * @param {ObjectId} id Stop id
 */
export const fetchStop = (id) => {
  return dispatch => {
    dispatch(requestStop(id));
    return axios.get(`/api/stops/${id}`)
      .then(response => dispatch(receiveStop(resposne.data)))
      .catch(err => dispatch(setStopsErrors(err.response.data)))
  }
}

export const requestStop = (id) => ({
  type: TYPES.REQUEST_STOP,
  payload: id
})

export const receiveStop = (stop) => ({
  type: TYPES.RECEIVE_STOP,
  payload: stop
})

/**
 * Setting errors
 */
export const setStopsErrors = (errors) => ({
  type: TYPES.SET_STOPS_ERRORS,
  payload: errors
})