import { put, call, takeLatest } from 'redux-saga/effects';

import { getCategoryList } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { GET_CATEGORY_LIST_REQUEST } from './constants';
import { getCategoryListSuccess, getCategoryListFailed } from './actions';

function* doGetCategoryList(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getCategoryList, action.payload);

    yield put(getCategoryListSuccess(response.data));
  } catch (err) {
    yield put(getCategoryListFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* categorySaga() {
  yield takeLatest(GET_CATEGORY_LIST_REQUEST, doGetCategoryList);
}
