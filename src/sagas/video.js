import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  // 비디오 가져오기
  VIDEO_GET_FAILURE,
  VIDEO_GET_REQUEST,
  VIDEO_GET_SUCCESS,

  // 비디오 댓글작성
  VIDEO_REPLY_POST_FAILURE,
  VIDEO_REPLY_POST_REQUEST,
  VIDEO_REPLY_POST_SUCCESS,

  // 비디오 댓글삭제
  VIDEO_REPLY_DELETE_FAILURE,
  VIDEO_REPLY_DELETE_REQUEST,
  VIDEO_REPLY_DELETE_SUCCESS,
} from "../reducers/video";

// 비디오 가져오기
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

// 비디오 댓글 작성
function videoReplyPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log("들어오는데이터는?", data);
  return axios.post("/vReply", JSON.stringify(data), config);
}

function* videoReplyPost(action) {
  try {
    const result = yield call(videoReplyPostAPI, action.data);

    yield put({
      type: VIDEO_REPLY_POST_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_REPLY_POST_FAILURE,
      error: "댓글작성에 실패하였습니다.",
    });
  }
}

// 비디오 댓글 삭제
function videoReplyDeleteAPI(data) {
  console.log("여기 들어옵니까?", data);
  JSON.stringify(data);
  return axios.delete(`/vReply/${data}`);
}

function* videoReplyDelete(action) {
  try {
    const result = yield call(videoReplyDeleteAPI, action.data);

    yield put({
      type: VIDEO_REPLY_DELETE_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_REPLY_DELETE_FAILURE,
      error: "댓글작성에 실패하였습니다.",
    });
  }
}

function* watchVideoGet() {
  yield takeLatest(VIDEO_GET_REQUEST, videoGet);
}

function* watchVideoReplyPost() {
  yield takeLatest(VIDEO_REPLY_POST_REQUEST, videoReplyPost);
}

function* watchVideoReplyDelete() {
  yield takeLatest(VIDEO_REPLY_DELETE_REQUEST, videoReplyDelete);
}

export default function* videoSaga() {
  yield all([
    fork(watchVideoGet),
    fork(watchVideoReplyPost),
    fork(watchVideoReplyDelete),
  ]);
}
