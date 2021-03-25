import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import communitySaga from "./community";
import faqSaga from "./faq";
import adminCoursesSaga from "./admin/courses/courses";
import adminVideoSaga from "./admin/video/";
import dashBoardSaga from "./dashboard";
import replySaga from "./reply";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(communitySaga),
    fork(faqSaga),
    fork(replySaga),
    fork(dashBoardSaga),
    fork(adminCoursesSaga),
    fork(adminVideoSaga),
  ]);
}
