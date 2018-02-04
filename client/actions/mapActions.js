import * as TYPES from './constants/mapConstants';

export const centerMap = (location) => ({
  type: TYPES.CENTER_MAP,
  payload: location
});