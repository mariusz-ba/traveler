import axios from 'axios';
import * as TYPES from './constants/carrierConstants';

/**
 * Fetch single carrier
 * @param {ObjectId} id Carrier id 
 */
export const fetchCarrier = (id) => {
  return dispatch => {
    dispatch(requestCarrier(id));
    return axios.get(`/api/carrier/${id}`)
      .then(response => dispatch(receiveCarrier(response.data)))
      .catch(err => dispatch(setCarriersErrors(err.response.data)));
  }
}

export const requestCarrier = (id) => ({
  type: TYPES.REQUEST_CARRIER,
  payload: id
});

export const receiveCarrier = (carrier) => ({
  type: TYPES.RECEIVE_CARRIER,
  payload: carrier
})

/**
 * Fetch multiple carriers
 * @param {Object} filter Filter params
 */
export const fetchCarriers = (filter) => {
  return dispatch => {
    dispatch(requestCarriers(filter));
    return axios.get(`/api/carriers`, { params: filter })
      .then(response => dispatch(receiveCarriers(response.data)))
      .catch(err => dispatch(setCarriersErrors(err.response.data)));
  }
}

export const requestCarriers = (filter) => ({
  type: TYPES.REQUEST_CARRIERS,
  payload: filter
})

export const receiveCarriers = (carriers) => ({
  type: TYPES.RECEIVE_CARRIERS,
  payload: carriers
})

/**
 * Delete existing carrier
 * @param {ObjectId} id Carrier id
 */
export const deleteCarrier = (id) => {
  return dispatch => {
    return axios.delete(`/api/carriers/${id}`)
      .then(response => {
        if(response.data.n === 1 && response.data.ok === 1)
          dispatch(deletedCarrier(id));
      })
      .catch(err => dispatch(setCarriersErrors(err.response.data)))
  }
}

export const deletedCarrier = (id) => ({
  type: TYPES.DELETE_CARRIER,
  payload: id
});

/**
 * Use this action to set errors that occurred while
 * doing some stuff with carriers data.
 * 
 * @param {Object} errors 
 */
export const setCarriersErrors = (errors) => ({
  type: TYPES.SET_CARRIERS_ERRORS,
  payload: errors
});