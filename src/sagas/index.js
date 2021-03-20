import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import communitySaga from "./community";

axios.defaults.baseURL = "http://localhost:8080";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(communitySaga)]);
}
