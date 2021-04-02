import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  DASHBOARD_GET_FAILURE,
  DASHBOARD_GET_REQUEST,
  DASHBOARD_GET_SUCCESS,
} from "../reducers/dashboard";

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

function* watchdashBoardGet() {
  yield takeLatest(DASHBOARD_GET_REQUEST, dashBoardGet);
}
export default function* dashBoardSaga() {
  yield all([fork(watchdashBoardGet)]);
}
