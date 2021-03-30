import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  TECH_POST_FAILURE,
  TECH_POST_REQUEST,
  TECH_POST_SUCCESS,
} from "../../../reducers/admin/courses/tech";

function techPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  console.log(config);
  console.log("테크포스트", data);
  return axios.post("/tech", JSON.stringify(data), config);
}

function* techPost(action) {
  try {
    yield call(techPostAPI, action.data);
    yield put({
      type: TECH_POST_SUCCESS,
    });
    yield put(push("/"));
  } catch (err) {
    yield put({
      type: TECH_POST_FAILURE,
      error: "테크등록에 실패하였습니다.",
    });
  }
}

function* watchTechPost() {
  yield takeLatest(TECH_POST_REQUEST, techPost);
}

export default function* techSaga() {
  yield all([fork(watchTechPost)]);
}
