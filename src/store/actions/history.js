import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {removeHistoryElement, saveHistory, removeHistory} = createActions({
    [ActionTypes.REMOVE_HISTORY_ELEMENT]: (payload) => payload,
    [ActionTypes.SAVE_HISTORY]: (payload) => payload,
    [ActionTypes.REMOVE_HISTORY]: (payload) => payload,
})
