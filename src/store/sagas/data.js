import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {getDataSuccess, getDataFailure} from 'src/store/actions';

// const ads = () => {
//     api.sendsay.request({ "action": "sys.settings.get"}).then(function(res) {
//       console.log('res',res);
//     }).catch ((err) => {
//       console.log('error', err)
//     })
//   }
  
// ads()
export function* getDataSaga({payload}) {
  console.log("PAYLOAD", typeof(JSON.parse(payload)))
  let error = null
  let response = null
    yield api.sendsay.request(
      JSON.parse(payload)
    )
    .then((resp) => {
      console.log('resp', resp)
      response = resp
    }).catch ((err) => {
      console.log('err', err)
      error = err
    })

    if(!error) {
      yield put(
        getDataSuccess({
            answer: response
        })
      );
    } else {
      yield put(getDataFailure(error));
    } 
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.GET_DATA, getDataSaga),
  ]);
}  
