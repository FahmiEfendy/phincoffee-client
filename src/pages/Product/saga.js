import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { createProduct, deleteProduct, getAllProduct, updateProduct } from '@domain/api';
import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_ALL_PRODUCT } from './constants';
import { setAllProduct } from './actions';

function* doGetAllProduct({ params, cbFailed }) {
  yield put(setLoading(true));
  try {
    const products = yield call(getAllProduct, params);
    yield put(setAllProduct(products.data));
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doCreateProduct({ payload, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(createProduct, payload);

    const products = yield call(getAllProduct);
    yield put(setAllProduct(products.data));
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doEditProduct({ payload, productId, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(updateProduct, productId, payload);

    const products = yield call(getAllProduct);
    yield put(setAllProduct(products.data));
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

function* doDeleteProduct({ productId, cbSuccess, cbFailed }) {
  yield put(setLoading(true));
  try {
    yield call(deleteProduct, productId);

    const products = yield call(getAllProduct);
    yield put(setAllProduct(products.data));
    cbSuccess && cbSuccess();
  } catch (error) {
    if (error?.response?.data?.output?.payload) {
      cbFailed && cbFailed(error.response.data.output.payload);
    }
  }
  yield put(setLoading(false));
}

export default function* productSaga() {
  yield takeLatest(GET_ALL_PRODUCT, doGetAllProduct);
  yield takeLatest(CREATE_PRODUCT, doCreateProduct);
  yield takeLatest(EDIT_PRODUCT, doEditProduct);
  yield takeLatest(DELETE_PRODUCT, doDeleteProduct);
}
