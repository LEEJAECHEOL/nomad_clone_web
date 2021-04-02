import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  PAY_POST_FAILURE,
  PAY_POST_REQUEST,
  PAY_POST_SUCCESS,
  PAY_GET_FAILURE,
  PAY_GET_REQUEST,
  PAY_GET_SUCCESS,
} from "../reducers/pay";

function payPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.post("/pay", JSON.stringify(data), config);
}

function* payPost(action) {
  try {
    const result = yield call(payPostAPI, action.data);
    const data = result.data.data;
    if (result.data.statusCode === 201) {
      yield put({
        type: PAY_POST_SUCCESS,
      });
      yield put(push(`/dashboard/${data.id}`));
    } else {
      yield put({
        type: PAY_POST_FAILURE,
        error: "결제 정보 저장 실패",
      });
    }
  } catch (err) {
    yield put({
      type: PAY_POST_FAILURE,
      error: "결제 정보 저장 실패",
    });
  }
}

function payGetAPI() {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.get("/admin/pay", config);
}

function* payGet() {
  try {
    const result = yield call(payGetAPI);
    const data = result.data.data;
    yield put({
      type: PAY_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: PAY_GET_FAILURE,
      error: "결제 정보 저장 실패",
    });
  }
}

function* watchPayPost() {
  yield takeLatest(PAY_POST_REQUEST, payPost);
}
function* watchPayGet() {
  yield takeLatest(PAY_GET_REQUEST, payGet);
}

export default function* paySaga() {
  yield all([fork(watchPayPost), fork(watchPayGet)]);
}
