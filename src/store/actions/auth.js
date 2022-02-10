import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {removeHistoryElement, saveHistory, removeHistory, getData, getDataSuccess, getDataFailure, authenticate, authenticateSuccess, authenticateCheck, authenticateFailure, logout} = createActions({
  [ActionTypes.REMOVE_HISTORY_ELEMENT]: (payload) => payload,
  [ActionTypes.SAVE_HISTORY]: (payload) => payload,
  [ActionTypes.REMOVE_HISTORY]: (payload) => payload,
  [ActionTypes.GET_DATA]: (payload) => payload,
  [ActionTypes.GET_DATA_SUCCESS]: (payload) => payload,
  [ActionTypes.GET_DATA_FAILURE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_CHECK]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
});
