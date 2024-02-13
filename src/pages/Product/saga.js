import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getAllProduct } from '@domain/api';
import { GET_ALL_PRODUCT } from './constants';
import { setAllProduct } from './actions';

function* doGetAllProduct({ cbFailed }) {
  yield put(setLoading(true));
  try {
    const products = yield call(getAllProduct);
    yield put(setAllProduct(products.data));
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

export default function* productSaga() {
  yield takeLatest(GET_ALL_PRODUCT, doGetAllProduct);
}
