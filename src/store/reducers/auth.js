import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};



export default {
  auth: handleActions(
    { 
      [ActionTypes.AUTHENTICATE]: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state, { payload }) => {
        return {
          ...state,
          sessionKey: null,
          login: null,
          sublogin: null,
          error: payload
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
    },
    initialState
  ),
};
