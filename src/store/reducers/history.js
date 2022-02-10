import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

const initialState = {
    history: [],
}

export default {
    history: handleActions({
        [ActionTypes.REMOVE_HISTORY_ELEMENT]: (state, {payload}) => {
          console.log("payload/REMOVE_HISTORY_ELEMENT", payload)
          const prevHistory = state.history
          const res = prevHistory.filter((obj) => {
            return obj.id !== payload
          })
          return {
            ...state,
            history: [...res] ,
          };
        },
        [ActionTypes.REMOVE_HISTORY]: (state, {payload}) => {
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
          payload.id = Math.random()
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
    },
        initialState
    )
}