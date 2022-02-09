import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: null,
  data: null,
  history: null,
};



export default {
  auth: handleActions(
    {
      [ActionTypes.REMOVE_HISTORY]: (state, {payload}) => {
        // payload = JSON.parse(payload)
        console.log("payload/REMOVE_HISTORY", payload)
        return {
          ...state,
          history: payload ,
        };
      },
      [ActionTypes.SAVE_HISTORY]: (state, {payload}) => {
        console.log("payload/SAVE_HISTORY", payload)
        const prevHistory = state.history
        payload = JSON.parse(payload)
        if(prevHistory) {
          return {
            ...state,
            history: [payload,...prevHistory]
          }
        } else {
          return {
            ...state,
            history: [payload]
          }
        }
      },
      [ActionTypes.GET_DATA]: (state, {payload}) => {
        console.log("payload/GET_DATA", payload)
        return {
          ...state,
          data: payload,
        };
      },
      [ActionTypes.GET_DATA_SUCCESS]: (state, {payload}) => {
        console.log("payload/GET_DATA_SUCCESS", payload)
        return {
          ...state,
          data: payload,
        };
      },
      [ActionTypes.GET_DATA_FAILURE]: (state, {payload}) => {
        console.log("payload/GET_DATA_FAILURE", payload)
        return {
          ...state,
          error: payload,
        };
      },
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
