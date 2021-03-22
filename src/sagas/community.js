import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  COMMUNITY_POST_FAILURE,
  COMMUNITY_POST_REQUEST,
  COMMUNITY_POST_SUCCESS,
  COMMUNITY_GET_FAILURE,
  COMMUNITY_GET_REQUEST,
  COMMUNITY_GET_SUCCESS,
  COMMUNITY_ONE_GET_FAILURE,
  COMMUNITY_ONE_GET_REQUEST,
  COMMUNITY_ONE_GET_SUCCESS,
} from "../reducers/community";

function communityPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  return axios.post("/community", JSON.stringify(data), config);
}

function* communityPost(action) {
  try {
    yield call(communityPostAPI, action.data);
    yield put({
      type: COMMUNITY_POST_SUCCESS,
    });
    yield put(push("/community"));
  } catch (err) {
    yield put({
      type: COMMUNITY_POST_FAILURE,
      error: "글작성에 실패하였습니다.",
    });
  }
}

function communityGetAPI(data) {
  return axios.get(`/community/${data}`);
}

function* communityGet(action) {
  try {
    const result = yield call(communityGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: COMMUNITY_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityOneGetAPI(data) {
  console.log("여기실행되네?", data);
  return axios.get(`/community/${data}`);
}

function* communityOneGet(action) {
  try {
    const result = yield call(communityOneGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: COMMUNITY_ONE_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_ONE_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* watchCommunityPost() {
  yield takeLatest(COMMUNITY_POST_REQUEST, communityPost);
}

function* watchCommunityGet() {
  yield takeLatest(COMMUNITY_GET_REQUEST, communityGet);
}

function* watchCommunityOneGet() {
  yield takeLatest(COMMUNITY_ONE_GET_REQUEST, communityOneGet);
}

export default function* userSaga() {
  yield all([
    fork(watchCommunityPost),
    fork(watchCommunityGet),
    fork(watchCommunityOneGet),
  ]);
}
