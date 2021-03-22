import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import communitySaga from "./community";
import adminCoursesSaga from "./admin/courses/courses";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(communitySaga), fork(adminCoursesSaga)]);
}
