import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import productSaga from '@pages/Product/saga';
import categorySaga from '@pages/Category/saga';

export default function* rootSaga() {
  yield all([appSaga(), productSaga(), categorySaga()]);
}
