import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {getData, getDataSuccess, getDataFailure} = createActions({
    [ActionTypes.GET_DATA]: (payload) => payload,
    [ActionTypes.GET_DATA_SUCCESS]: (payload) => payload,
    [ActionTypes.GET_DATA_FAILURE]: (payload) => payload,
})