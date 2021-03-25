import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  CATEGORY_GET_FAILURE,
  CATEGORY_GET_REQUEST,
  CATEGORY_GET_SUCCESS,
} from "../reducers/category";

function categoryGetAPI() {
  console.log("카테고리겟");
  return axios.get(`/category`);
}

function* categoryGet(action) {
  try {
    const result = yield call(categoryGetAPI, action.data);
    const data = result.data.data;
    console.log(result);
    console.log(data);
    yield put({
      type: CATEGORY_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: CATEGORY_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function* watchcategoryGet() {
  yield takeLatest(CATEGORY_GET_REQUEST, categoryGet);
}
export default function* categorySaga() {
  yield all([fork(watchcategoryGet)]);
}
