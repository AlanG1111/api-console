import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess, authenticateFailure, } from 'src/store/actions';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({payload}) {
  let error = null
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err) => {
      error = err
      document.cookie = '';
      // console.log('err', error);
    });

    if(!error) {
      yield put(
        authenticateSuccess({
          sessionKey: api.sendsay.session,
          login: payload.login,
          sublogin: payload.sublogin,
        })
      );
    } else {
      yield put(authenticateFailure(error));
    } 
}

export function* logoutSaga() {
  console.log("authenticateFailure", authenticateFailure)
  yield put(authenticateFailure());
  document.cookie = '';
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
