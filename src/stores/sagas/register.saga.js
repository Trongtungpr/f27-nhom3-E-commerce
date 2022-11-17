import { put, takeEvery, delay } from "redux-saga/effects";
import {
  registerAction,
  registerActionFailed,
  registerActionSuccess,
} from "../slices/register.slice.js";
import { AuthAPI } from "../../api";

function* register(action) {
  try {
    const registerPayload = action.payload;
    yield delay(1000);
    const response = yield AuthAPI.register({
      email: registerPayload.email,
      password: registerPayload.password,
    });

    yield put(registerActionSuccess(response.data.user));
  } catch (e) {
    console.log(e);
    yield put(registerActionFailed(e.response.data));
  }
}

export function* registerSaga() {
  yield takeEvery(registerAction, register);
}
