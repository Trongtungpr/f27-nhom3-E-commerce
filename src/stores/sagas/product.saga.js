import { put, takeEvery, delay } from "redux-saga/effects";
import { log } from "util";
import { AuthAPI } from "../../api";
import { ProductAPI } from "../../api/product.api";
import {
  getProductsAction,
  getProductsFailed,
  getProductsSuccess,
} from "../slices/product.slice";

function* getProducts(action) {
  try {
    const response = yield ProductAPI.getProducts();
    
    console.log(response);

    yield put(getProductsSuccess(response.data));
  } catch (e) {
    yield put(getProductsFailed(e.response.data));
  }
}

export function* productSaga() {
  yield takeEvery(getProductsAction, getProducts);
}
