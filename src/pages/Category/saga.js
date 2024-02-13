import { put, call, takeLatest } from 'redux-saga/effects';

import { setLoading } from '@containers/App/actions';
import { getCategoryDetail, getCategoryList } from '@domain/api';
import { GET_CATEGORY_DETAIL_REQUEST, GET_CATEGORY_LIST_REQUEST } from './constants';
import {
  getCategoryListSuccess,
  getCategoryListFailed,
  getCategoryDetailFailed,
  getCategoryDetailSuccess,
} from './actions';

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

function* doGetCategoryDetail(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getCategoryDetail, action.id);

    yield put(getCategoryDetailSuccess(response.data));
  } catch (err) {
    yield put(getCategoryDetailFailed(err.message));
  }

  yield put(setLoading(false));
}

export default function* categorySaga() {
  yield takeLatest(GET_CATEGORY_LIST_REQUEST, doGetCategoryList);
  yield takeLatest(GET_CATEGORY_DETAIL_REQUEST, doGetCategoryDetail);
}
