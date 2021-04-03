import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  DASHBOARD_GET_FAILURE,
  DASHBOARD_GET_REQUEST,
  DASHBOARD_GET_SUCCESS,
  PROFILE_POST_FAILURE,
  PROFILE_POST_REQUEST,
  PROFILE_POST_SUCCESS,
  NAME_POST_FAILURE,
  NAME_POST_REQUEST,
  NAME_POST_SUCCESS,
} from "../reducers/dashboard";
import { push } from "connected-react-router";

function dashBoardGetAPI(data) {
  return axios.get(`/user/${data}`);
}

function* dashBoardGet(action) {
  try {
    const result = yield call(dashBoardGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: DASHBOARD_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: DASHBOARD_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function profilePostAPI(data) {
  const formData = new FormData();
  formData.append("file", data.file);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
      "Content-Type": "multipart/form-data",
    },
  };
  const id = data.id;
  return axios.post(`/user/profile/${id}`, formData, config);
}

function* profilePost(action) {
  try {
    yield call(profilePostAPI, action.data);
    yield put({
      type: PROFILE_POST_SUCCESS,
    });

    yield put(push("/"));
  } catch (err) {
    yield put({
      type: PROFILE_POST_FAILURE,
      error: "프로필사진 업데이트에 실패하였습니다.",
    });
  }
}

function namePostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  const id = data.id;
  const name = data.name;
  return axios.post(`/user/${id}`, JSON.stringify(name), config);
}

function* namePost(action) {
  try {
    yield call(namePostAPI, action.data);
    yield put({
      type: NAME_POST_SUCCESS,
    });

    yield put(push("/"));
  } catch (err) {
    yield put({
      type: NAME_POST_FAILURE,
      error: "이름 업데이트에 실패하였습니다.",
    });
  }
}

function* watchdashBoardGet() {
  yield takeLatest(DASHBOARD_GET_REQUEST, dashBoardGet);
}

function* watchProfilePost() {
  yield takeLatest(PROFILE_POST_REQUEST, profilePost);
}

function* watchNamePost() {
  yield takeLatest(NAME_POST_REQUEST, namePost);
}

export default function* dashBoardSaga() {
  yield all([
    fork(watchdashBoardGet),
    fork(watchProfilePost),
    fork(watchNamePost),
  ]);
}
