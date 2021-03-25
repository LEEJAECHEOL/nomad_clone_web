import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  FAQ_POST_FAILURE,
  FAQ_POST_REQUEST,
  FAQ_POST_SUCCESS,
  FAQ_UPDATE_FAILURE,
  FAQ_UPDATE_REQUEST,
  FAQ_UPDATE_SUCCESS,
  FAQ_GET_FAILURE,
  FAQ_GET_REQUEST,
  FAQ_GET_SUCCESS,
  FAQ_ONE_GET_FAILURE,
  FAQ_ONE_GET_REQUEST,
  FAQ_ONE_GET_SUCCESS,
} from "../reducers/faq";

// 업데이트 [이부분 모르겠음.[]
function faqUpdateAPI(data) {
  const config = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  const faqId = data[Object.keys(data)[3]];
  console.log("업데이트 실행되니?11", faqId);
  delete data.faqCategory;
  console.log("제거된 데이터", data);
  return axios.put(`/faq/${faqId}`, JSON.stringify(data), config);
}

// 이부분 막힘.
function* faqUpdate(action) {
  try {
    const result = yield call(faqUpdateAPI, action.data);
    const data = result.data.data;
    yield put({
      type: FAQ_UPDATE_SUCCESS,
      data: data,
    });
    yield put(push("/faq/"));
  } catch (err) {
    yield put({
      type: FAQ_UPDATE_FAILURE,
      error: "FAQ업데이트에 실패하였습니다.",
    });
  }
}

// 겟한개 요청
function faqOneGetAPI(data) {
  return axios.get(`/faq/${data}`);
}

function* faqOneGet(action) {
  try {
    const result = yield call(faqOneGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: FAQ_ONE_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: FAQ_ONE_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

// 포스트
function faqPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  console.log("포스트실행되니?", data);
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

// 겟요청
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
function* watchFaqUpdate() {
  yield takeLatest(FAQ_UPDATE_REQUEST, faqUpdate);
}
function* watchFaqGet() {
  yield takeLatest(FAQ_GET_REQUEST, faqGet);
}
function* watchFaqOneGet() {
  yield takeLatest(FAQ_ONE_GET_REQUEST, faqOneGet);
}
export default function* faqSaga() {
  yield all([
    fork(watchFaqPost),
    fork(watchFaqGet),
    fork(watchFaqOneGet),
    fork(watchFaqUpdate),
  ]);
}
