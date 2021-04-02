import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  VIDEO_GET_FAILURE,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,
} from "../reducers/video";

function videoGetAPI(data) {
  return axios.get(`/video/${data}`);
}

function* videoGet(action) {
  try {
    const result = yield call(videoGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: VIDEO_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* watchVideoGet() {
  yield takeLatest(VIDEO_GET_REQUEST, videoGet);
}

export default function* videoSaga() {
  yield all([fork(watchVideoGet)]);
}
