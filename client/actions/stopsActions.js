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
      .then(response => dispatch(receiveStop(response.data)))
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
 * Creating new stop
 * @param {Object} stop Data for new stop {name, lat, lng}
 */
export const createStop = (stop) => {
  return dispatch => {
    // Dispatch action before sending...
    return axios.post(`/api/stops`, stop)
      .then(response => dispatch(receiveStop(response.data)))
      .catch(err => dispatch(setStopsErrors(err.response.data)));
  }
}

/**
 * Delete existing stop by its id
 * @param {ObjectId} id Stop id
 */
export const deleteStop = (id) => {
  return dispatch => {
    return axios.delete(`/api/stops/${id}`)
      .then(response => {
        if(response.data.n === 1 && response.data.ok === 1)
          dispatch(deletedStop(id));
      })
      .catch(err => dispatch(setStopsErrors(err.response.data)));
  }
}

export const deletedStop = (id) => ({
  type: TYPES.DELETE_STOP,
  payload: id
});

/**
 * Update existing stop
 * @param {ObjectID} id Id of stop to update
 * @param {Object} stop New stop data
 */
export const updateStop = (id, stop) => {
  return dispatch => {
    return axios.put(`/api/stops/${id}`, stop)
      .then(response => dispatch(receiveStop(response.data)))
      .catch(err => setStopsErrors(err.response.data));
  }
}

/**
 * Setting errors
 */
export const setStopsErrors = (errors) => ({
  type: TYPES.SET_STOPS_ERRORS,
  payload: errors
})