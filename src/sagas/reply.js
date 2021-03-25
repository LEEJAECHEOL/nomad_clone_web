import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  REPLY_POST_FAILURE,
  REPLY_POST_REQUEST,
  REPLY_POST_SUCCESS,
} from "../reducers/reply";

function replyPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  return axios.post("/cReply", JSON.stringify(data), config);
}

function* replyPost(action) {
  try {
    yield call(replyPostAPI, action.data);
    yield put({
      type: REPLY_POST_SUCCESS,
    });
    yield put(push("/cReply"));
  } catch (err) {
    yield put({
      type: REPLY_POST_FAILURE,
      error: "댓글작성에 실패하였습니다.",
    });
  }
}

function* watchReplyPost() {
  yield takeLatest(REPLY_POST_REQUEST, replyPost);
}

export default function* replySaga() {
  yield all([fork(watchReplyPost)]);
}
