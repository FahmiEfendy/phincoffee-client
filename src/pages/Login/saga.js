import { takeLatest, call, put } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { setLogin, setToken } from '@containers/Client/actions';
import { login } from '@domain/api';

import { POST_LOGIN } from './constants';

function* doLogin({ dataUser, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    const data = yield call(login, dataUser);
    yield put(setLogin(true));
    yield put(setToken(data.token));

    cbSuccess && cbSuccess();
  } catch (error) {
    cbFailed && cbFailed();
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(POST_LOGIN, doLogin);
}
