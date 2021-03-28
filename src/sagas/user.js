import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../reducers/user";
import { push } from "connected-react-router";
// logInAPI, logIn, watchLogIn 세트이다. 복사해서 쓰자.
function logInAPI(data) {
  return axios.post("/oauth/jwt/google", JSON.stringify(data));
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    const data = result.data.data;
    localStorage.setItem("nomadToken", data.token);
    delete data.token;
    yield put({
      type: LOG_IN_SUCCESS,
      data: data,
    });
  } catch (err) {
    console.log("err" + err);
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
  yield put(push("/login"));
}

function loadMyInfoAPI() {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.get("/user/load", config);
}
function* loadMyInfo() {
  try {
    const result = yield call(loadMyInfoAPI);
    const data = result.data.data;
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: data,
    });
  } catch (error) {
    console.dir(error);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: error.response.data,
    });
  }
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchLoadMyInfo)]);
}
