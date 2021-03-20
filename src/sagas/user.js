import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../reducers/user";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

// logInAPI, logIn, watchLogIn 세트이다. 복사해서 쓰자.
function logInAPI(data) {
  return axios.post("/oauth/jwt/google", JSON.stringify(data), config);
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    const data = result.data.data;
    localStorage.setItem("nomadToken", data.token);
    delete data.token;
    console.log(data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* logOut() {
  localStorage.removeItem("nomadToken");
  yield put({
    type: LOG_OUT_SUCCESS,
  });
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
