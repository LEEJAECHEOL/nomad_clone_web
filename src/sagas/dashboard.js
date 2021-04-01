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
  console.log("들어오는 데이터는?", data);
  return axios.get(`/user/${data}`);
}

function* dashBoardGet(action) {
  try {
    const result = yield call(dashBoardGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
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
  console.log(data);
  formData.append("file", data.file);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(config);
  const id = data.id;
  return axios.post(`/profile/${id}`, formData, config);
}

function* profilePost(action) {
  console.log(action.data);
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
  console.log(data);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  const id = data.id;
  const name = data.name;
  console.log(id);
  return axios.post(`/user/${id}`, JSON.stringify(name), config);
}

function* namePost(action) {
  console.log(action.data);
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
