import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  GET_DATA: undefined,
  GET_DATA_FAILURE: undefined,
  GET_DATA_SUCCESS: undefined,
  AUTHENTICATE: undefined,
  AUTHENTICATE_CHECK: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  LOGOUT: undefined,
  LOGOUT_SUCCESS: undefined,
  LOGOUT_FAILURE: undefined,
});
