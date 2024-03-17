/**
 * ...
 */

import produce from 'immer';
import { GET_TOPICS_SUCCESS } from './constants';

export const initialState = {
  sideBar: [],
};

/* eslint-disable default-case, no-param-reassign */
const topicsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TOPICS_SUCCESS:
        draft.sideBar = [...action.payload];
        break;
    }
  });

export default topicsReducer;
