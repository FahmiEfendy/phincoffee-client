import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { register } from '@domain/api';

import { POST_REGISTER } from './constants';

function* doRegister({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(register, dataUser);
    cbSuccess && cbSuccess();
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* registerSaga() {
  yield takeLatest(POST_REGISTER, doRegister);
}
