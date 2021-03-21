import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  FAQ_POST_FAILURE,
  FAQ_POST_REQUEST,
  FAQ_POST_SUCCESS,
  FAQ_GET_FAILURE,
  FAQ_GET_REQUEST,
  FAQ_GET_SUCCESS,
} from "../reducers/faq";

function faqPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  return axios.post("/faq", JSON.stringify(data), config);
}

function* faqPost(action) {
  try {
    yield call(faqPostAPI, action.data);
    yield put({
      type: FAQ_POST_SUCCESS,
    });
    yield put(push("/faq"));
  } catch (err) {
    yield put({
      type: FAQ_POST_FAILURE,
      error: "FAQ작성에 실패하였습니다.",
    });
  }
}

function faqGetAPI(data) {
  return axios.get(`/faq/${data}`);
}

function* faqGet(action) {
  try {
    const result = yield call(faqGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: FAQ_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: FAQ_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* watchFaqPost() {
  yield takeLatest(FAQ_POST_REQUEST, faqPost);
}

function* watchFaqGet() {
  yield takeLatest(FAQ_GET_REQUEST, faqGet);
}
export default function* userSaga() {
  yield all([fork(watchFaqPost), fork(watchFaqGet)]);
}
