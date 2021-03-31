import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  TECH_POST_FAILURE,
  TECH_POST_REQUEST,
  TECH_POST_SUCCESS,
  TECH_GET_FAILURE,
  TECH_GET_REQUEST,
  TECH_GET_SUCCESS,
} from "../../../reducers/admin/tech/index";

function techPostAPI(data) {
  const formData = new FormData();
  console.log(data);
  formData.append("file", data.file);
  formData.append("title", data.title);
  formData.append("isFilter", data.isFilter);
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
      "Content-Type": "multipart/form-data",
    },
  };
  console.log(config);
  return axios.post("/admin/tech", formData, config);
}

function* techPost(action) {
  console.log(action.data);
  try {
    yield call(techPostAPI, action.data);
    yield put({
      type: TECH_POST_SUCCESS,
    });

    // yield put(push("/"));
  } catch (err) {
    yield put({
      type: TECH_POST_FAILURE,
      error: "테크등록에 실패하였습니다.",
    });
  }
}
function techGetAPI() {
  return axios.get("/tech");
}

function* techGet() {
  try {
    const result = yield call(techGetAPI);
    yield put({
      type: TECH_GET_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: TECH_GET_FAILURE,
      error: "테크 가져오기 실패.",
    });
  }
}

function* watchTechPost() {
  yield takeLatest(TECH_POST_REQUEST, techPost);
}
function* watchTechGet() {
  yield takeLatest(TECH_GET_REQUEST, techGet);
}

export default function* techSaga() {
  yield all([fork(watchTechPost), fork(watchTechGet)]);
}
