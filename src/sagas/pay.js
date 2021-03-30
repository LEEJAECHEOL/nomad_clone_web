import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  PAY_POST_FAILURE,
  PAY_POST_REQUEST,
  PAY_POST_SUCCESS,
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

function* watchPayPost() {
  yield takeLatest(PAY_POST_REQUEST, payPost);
}

export default function* paySaga() {
  yield all([fork(watchPayPost)]);
}
