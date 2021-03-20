import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  COMMUNITY_POST_FAILURE,
  COMMUNITY_POST_REQUEST,
  COMMUNITY_POST_SUCCESS,
  COMMUNITY_GET_FAILURE,
  COMMUNITY_GET_REQUEST,
  COMMUNITY_GET_SUCCESS,
} from "../reducers/community";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // Authorization: "Bearer " + localStorage.getItem("nomadToken"),
  },
};

// logInAPI, logIn, watchLogIn 세트이다. 복사해서 쓰자.
function communityPostAPI(data) {
  return axios.post("/com", JSON.stringify(data), config);
}

function* communityPost(action) {
  try {
    const result = yield call(communityPostAPI, action.data);
    const data = result.data.data;
    localStorage.setItem("nomadToken", data.token);
    delete data.token;
    console.log(data);
    yield put({
      type: COMMUNITY_POST_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_POST_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityGetAPI(data) {
  return axios.get(`/com/${data}`, config);
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

function* watchCommunityPost() {
  yield takeLatest(COMMUNITY_POST_REQUEST, communityPost);
}

function* watchCommunityGet() {
  yield takeLatest(COMMUNITY_GET_REQUEST, communityGet);
}
export default function* userSaga() {
  yield all([fork(watchCommunityPost), fork(watchCommunityGet)]);
}
