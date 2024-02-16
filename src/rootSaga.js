import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@pages/Register/saga';
import loginSaga from '@pages/Login/saga';
import productSaga from '@pages/Product/saga';
import categorySaga from '@pages/Category/saga';

export default function* rootSaga() {
  yield all([appSaga(), registerSaga(), loginSaga(), productSaga(), categorySaga()]);

