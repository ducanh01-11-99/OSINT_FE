import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectAccManagement = state =>
  state[REDUX_KEY.accountManagement] || initialState;

export const selectLoadingChannel = () =>
  createSelector(
    selectAccManagement,
    state => state.isLoading,
  );

export const selectTotalCount = () =>
  createSelector(
    selectAccManagement,
    state => state.totalCount,
  );

export const selectListAccount = () =>
  createSelector(
    selectAccManagement,
    state => state.listAccount,
  );
