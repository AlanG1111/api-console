import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

const initialState = {
    error: null,
    data: null,
    answer: null,
}

export default {
    data: handleActions( {
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
          answer: payload,
        };
      },
      [ActionTypes.GET_DATA_FAILURE]: (state, {payload}) => {
        console.log("payload/GET_DATA_FAILURE", payload)
        return {
          ...state,
          error: payload,
        };
      },
    },
      initialState
    )
}
