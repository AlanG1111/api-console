import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {getData, getDataSuccess, getDataFailure, authenticate, authenticateSuccess, authenticateCheck, authenticateFailure, logout} = createActions({
  [ActionTypes.GET_DATA]: (payload) => payload,
  [ActionTypes.GET_DATA_SUCCESS]: (payload) => payload,
  [ActionTypes.GET_DATA_FAILURE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_CHECK]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
});
