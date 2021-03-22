import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";
import {
  VIDEO_FOLDER_POST_REQUEST,
  VIDEO_FOLDER_POST_SUCCESS,
  VIDEO_FOLDER_POST_FAILURE,
  VIDEO_FOLDER_ALL_GET_REQUEST,
  VIDEO_FOLDER_ALL_GET_SUCCESS,
  VIDEO_FOLDER_ALL_GET_FAILURE,
  VIDEO_FOLDER_DELETE_SUCCESS,
  VIDEO_FOLDER_DELETE_REQUEST,
  VIDEO_FOLDER_DELETE_FAILURE,
} from "../../../reducers/admin/video/";

function vimeoCreateFolder(data) {
  const headerPost = {
    Accept: "application/vnd.vimeo.*+json;version=3.4",
    Authorization: `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  };
  return axios({
    method: "post",
    url: `https://api.vimeo.com/me/projects`,
    headers: headerPost,
    data: JSON.stringify(data),
  });
}
function vimeoDeleteFolder(data) {
  const headerDelete = {
    Accept: "application/vnd.vimeo.*+json;version=3.4",
    Authorization: `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`,
    "Content-Type": "application/x-www-form-urlencode",
  };
  return axios({
    method: "delete",
    url: `https://api.vimeo.com/me/projects/${data}`,
    headers: headerDelete,
  });
}
function vimeoUpload(data) {}
function vimeoMoveFolder(data) {}

function videoFolderPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.post("/admin/videoFolder", JSON.stringify(data), config);
}
function* videoFolderPost(action) {
  try {
    const vimeoResult = yield call(vimeoCreateFolder, action.data);
    const parse = vimeoResult.data.uri.split("/");
    const data = action.data;
    const folderId = parse[parse.length - 1];
    data.vimeoFolderId = folderId;

    const result = yield call(videoFolderPostAPI, data);
    yield put({
      type: VIDEO_FOLDER_POST_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_FOLDER_POST_FAILURE,
      error: "폴더 등록에 실패하였습니다.",
    });
  }
}

function videoFolderAllGetAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.get("/admin/videoFolder", config);
}
function* videoFolderAllGet() {
  try {
    const result = yield call(videoFolderAllGetAPI);
    yield put({
      type: VIDEO_FOLDER_ALL_GET_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_FOLDER_ALL_GET_FAILURE,
      error: "실패",
    });
  }
}

function videoFolderDeleteAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.delete(`/admin/videoFolder/${data}`, config);
}
function* videoFolderDelete(action) {
  try {
    yield call(vimeoDeleteFolder, action.data.vimeoFolderId);
    yield call(videoFolderDeleteAPI, action.data.id);
    yield put({
      type: VIDEO_FOLDER_DELETE_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: VIDEO_FOLDER_DELETE_FAILURE,
      error: "실패",
    });
  }
}

function* watchVideoFolderAllGet() {
  yield takeLatest(VIDEO_FOLDER_ALL_GET_REQUEST, videoFolderAllGet);
}

function* watchVideoFolderPost() {
  yield takeLatest(VIDEO_FOLDER_POST_REQUEST, videoFolderPost);
}

function* watchVideoFolderDelete() {
  yield takeLatest(VIDEO_FOLDER_DELETE_REQUEST, videoFolderDelete);
}

export default function* userSaga() {
  yield all([
    fork(watchVideoFolderPost),
    fork(watchVideoFolderAllGet),
    fork(watchVideoFolderDelete),
  ]);
}
