import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  CATEGORY_GET_FAILURE,
  CATEGORY_GET_REQUEST,
  CATEGORY_GET_SUCCESS,
  CATEGORY_POST_FAILURE,
  CATEGORY_POST_REQUEST,
  CATEGORY_POST_SUCCESS,
  FAQ_CATEGORY_POST_FAILURE,
  FAQ_CATEGORY_POST_REQUEST,
  FAQ_CATEGORY_POST_SUCCESS,
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

function categoryPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  console.log("포스트실행되니?", data);
  return axios.post("/category", JSON.stringify(data), config);
}

function* categoryPost(action) {
  try {
    yield call(categoryPostAPI, action.data);
    yield put({
      type: CATEGORY_POST_SUCCESS,
    });
    yield put(push("/community"));
  } catch (err) {
    yield put({
      type: CATEGORY_POST_FAILURE,
      error: "FAQ작성에 실패하였습니다.",
    });
  }
}

function faqCategoryPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  console.log("포스트실행되니?", data);
  return axios.post("/faq/category", JSON.stringify(data), config);
}

function* faqCategoryPost(action) {
  try {
    yield call(faqCategoryPostAPI, action.data);
    yield put({
      type: FAQ_CATEGORY_POST_SUCCESS,
    });
    yield put(push("/faq"));
  } catch (err) {
    yield put({
      type: FAQ_CATEGORY_POST_FAILURE,
      error: "FAQ작성에 실패하였습니다.",
    });
  }
}

function* watchCategoryGet() {
  yield takeLatest(CATEGORY_GET_REQUEST, categoryGet);
}

function* watchCategoryPost() {
  yield takeLatest(CATEGORY_POST_REQUEST, categoryPost);
}

function* watchFaqCategoryPost() {
  yield takeLatest(FAQ_CATEGORY_POST_REQUEST, faqCategoryPost);
}

export default function* categorySaga() {
  yield all([
    fork(watchCategoryGet),
    fork(watchCategoryPost),
    fork(watchFaqCategoryPost),
  ]);
}
