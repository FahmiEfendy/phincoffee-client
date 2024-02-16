import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';

import { getProfile } from '@domain/api';
import { setProfile } from './actions';
import { GET_PROFILE } from './constants';

function* doGetProfile({ userId }) {
  yield put(setLoading(true));
  try {
    const { result } = yield call(getProfile, userId);
    yield put(setProfile(result));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE, doGetProfile);
}
