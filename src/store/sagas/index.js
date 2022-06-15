import {all, fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';
import data from 'src/store/sagas/data';

export default function* root() {
  yield all([
    fork(login),
    fork(data),
  ]);
}
