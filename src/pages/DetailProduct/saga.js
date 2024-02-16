import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getOneProduct } from '@domain/api';
import { GET_PRODUCT_DETAIL } from './constants';
import { getDetailProduct } from './actions';

function* doGetDetailProduct({ params, cbFailed }) {
  yield put(setLoading(true));
  try {
    const products = yield call(getOneProduct, params);
    yield put(getDetailProduct(products.data));
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

export default function* detailProductSaga() {
    yield takeLatest(GET_PRODUCT_DETAIL, doGetDetailProduct);
}