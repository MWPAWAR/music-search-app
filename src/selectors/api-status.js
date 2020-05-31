import { createSelector } from 'reselect';
import { FETCHING, FETCHED } from '../constants/app';

const getTrackingState = state => state.loading;

const getApiStatus = createSelector(
  getTrackingState,
  trackingState => trackingState ? FETCHING : FETCHED
);

export default getApiStatus;
