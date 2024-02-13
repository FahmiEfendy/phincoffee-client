import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import categorySaga from '@pages/Category/saga';

export default function* rootSaga() {
  yield all([appSaga(), categorySaga()]);
}
