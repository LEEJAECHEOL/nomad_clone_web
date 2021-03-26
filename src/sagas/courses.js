import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  COURSES_GET_FAILURE,
  COURSES_GET_REQUEST,
  COURSES_GET_SUCCESS,
  HOME_COURSES_GET_FAILURE,
  HOME_COURSES_GET_REQUEST,
  HOME_COURSES_GET_SUCCESS,
  COURSES_ONE_GET_FAILURE,
  COURSES_ONE_GET_REQUEST,
  COURSES_ONE_GET_SUCCESS,
} from "../reducers/courses";

function coursesGetAPI() {
  return axios.get(`/courses`);
}

function* coursesGet(action) {
  try {
    const result = yield call(coursesGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: COURSES_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COURSES_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function homeCoursesGetAPI() {
  return axios.get(`/homeCourses`);
}

function* homeCoursesGet(action) {
  try {
    const result = yield call(homeCoursesGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: HOME_COURSES_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: HOME_COURSES_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function coursesOneGetAPI(data) {
  return axios.get(`/courses/${data}`);
}

function* coursesOneGet(action) {
  try {
    const result = yield call(coursesOneGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: COURSES_ONE_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COURSES_ONE_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* watchCoursesGet() {
  yield takeLatest(COURSES_GET_REQUEST, coursesGet);
}

function* watchHomeCoursesGet() {
  yield takeLatest(HOME_COURSES_GET_REQUEST, homeCoursesGet);
}

function* watchCoursesOneGet() {
  yield takeLatest(COURSES_ONE_GET_REQUEST, coursesOneGet);
}

export default function* coursesSaga() {
  yield all([
    fork(watchCoursesGet),
    fork(watchCoursesOneGet),
    fork(watchHomeCoursesGet),
  ]);
}
