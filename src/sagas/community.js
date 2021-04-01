import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import axios from "axios";

import {
  // 글작성
  COMMUNITY_POST_FAILURE,
  COMMUNITY_POST_REQUEST,
  COMMUNITY_POST_SUCCESS,

  // 글작성
  COMMUNITY_LIKE_POST_FAILURE,
  COMMUNITY_LIKE_POST_REQUEST,
  COMMUNITY_LIKE_POST_SUCCESS,

  // 글목록
  COMMUNITY_GET_FAILURE,
  COMMUNITY_GET_REQUEST,
  COMMUNITY_GET_SUCCESS,

  // 카테고리로 필터링
  COMMUNITY_CATEGORY_GET_FAILURE,
  COMMUNITY_CATEGORY_GET_REQUEST,
  COMMUNITY_CATEGORY_GET_SUCCESS,

  // 상세보기
  COMMUNITY_ONE_GET_FAILURE,
  COMMUNITY_ONE_GET_REQUEST,
  COMMUNITY_ONE_GET_SUCCESS,

  // 인기순으로 찾기
  COMMUNITY_POPULAR_GET_FAILURE,
  COMMUNITY_POPULAR_GET_REQUEST,
  COMMUNITY_POPULAR_GET_SUCCESS,

  // 최근작성순으로 찾기
  COMMUNITY_NEW_GET_FAILURE,
  COMMUNITY_NEW_GET_REQUEST,
  COMMUNITY_NEW_GET_SUCCESS,

  // 댓글작성
  REPLY_POST_FAILURE,
  REPLY_POST_REQUEST,
  REPLY_POST_SUCCESS,

  // 댓글삭제
  REPLY_DELETE_FAILURE,
  REPLY_DELETE_REQUEST,
  REPLY_DELETE_SUCCESS,
} from "../reducers/community";

function communityPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.post("/community", JSON.stringify(data), config);
}

function* communityPost(action) {
  try {
    yield call(communityPostAPI, action.data);
    yield put({
      type: COMMUNITY_POST_SUCCESS,
    });
    yield put(push("/community"));
  } catch (err) {
    yield put({
      type: COMMUNITY_POST_FAILURE,
      error: "글작성에 실패하였습니다.",
    });
  }
}

function communityLikePostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.post(`/like`, JSON.stringify(data), config);
}

function* communityLikePost(action) {
  try {
    yield call(communityLikePostAPI, action.data);
    yield put({
      type: COMMUNITY_LIKE_POST_SUCCESS,
    });
    yield put(push("/community"));
  } catch (err) {
    yield put({
      type: COMMUNITY_LIKE_POST_FAILURE,
      error: "좋아요 실패하였습니다.",
    });
  }
}

function communityGetAPI(data) {
  // return axios.get(`/community`);
  return axios.get(
    `/community?sort=${data.sort}&categoryId=${data.categoryId}&page=${data.page}`
  );
}

function* communityGet(action) {
  try {
    const result = yield call(communityGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: COMMUNITY_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityPopularGetAPI() {
  return axios.get(`/community/popular`);
}

function* communityPopularGet(action) {
  try {
    const result = yield call(communityPopularGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: COMMUNITY_POPULAR_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_POPULAR_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityNewGetAPI(data) {
  return axios.get(`/community/new/${data}`);
}

function* communityNewGet(action) {
  try {
    const result = yield call(communityNewGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: COMMUNITY_NEW_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_NEW_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityCategoryGetAPI(data) {
  return axios.get(`/community/category/${data}`);
}

function* communityCategoryGet(action) {
  try {
    const result = yield call(communityCategoryGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: COMMUNITY_CATEGORY_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_CATEGORY_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function communityOneGetAPI(data) {
  return axios.get(`/community/${data}`);
}

function* communityOneGet(action) {
  try {
    const result = yield call(communityOneGetAPI, action.data);
    const data = result.data.data;
    yield put({
      type: COMMUNITY_ONE_GET_SUCCESS,
      data: data,
    });
  } catch (err) {
    yield put({
      type: COMMUNITY_ONE_GET_FAILURE,
      error: "로그인에 실패하였습니다.",
    });
  }
}

function replyPostAPI(data) {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("nomadToken"),
    },
  };
  return axios.post("/cReply", JSON.stringify(data), config);
}

function* replyPost(action) {
  try {
    const result = yield call(replyPostAPI, action.data);

    yield put({
      type: REPLY_POST_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: REPLY_POST_FAILURE,
      error: "댓글작성에 실패하였습니다.",
    });
  }
}

function replyDeleteAPI(data) {
  JSON.stringify(data);
  return axios.delete(`/cReply/${data}`);
}

function* replyDelete(action) {
  try {
    const result = yield call(replyDeleteAPI, action.data);

    yield put({
      type: REPLY_DELETE_SUCCESS,
      data: result.data.data,
    });
  } catch (err) {
    yield put({
      type: REPLY_DELETE_FAILURE,
      error: "댓글작성에 실패하였습니다.",
    });
  }
}

function* watchReplyPost() {
  yield takeLatest(REPLY_POST_REQUEST, replyPost);
}

function* watchReplyDelete() {
  yield takeLatest(REPLY_DELETE_REQUEST, replyDelete);
}

function* watchCommunityPost() {
  yield takeLatest(COMMUNITY_POST_REQUEST, communityPost);
}

function* watchCommunityLikePost() {
  yield takeLatest(COMMUNITY_LIKE_POST_REQUEST, communityLikePost);
}

function* watchCommunityGet() {
  yield takeLatest(COMMUNITY_GET_REQUEST, communityGet);
}

function* watchCommunityOneGet() {
  yield takeLatest(COMMUNITY_ONE_GET_REQUEST, communityOneGet);
}

function* watchCommunityCategoryGet() {
  yield takeLatest(COMMUNITY_CATEGORY_GET_REQUEST, communityCategoryGet);
}

function* watchCommunityPopularGet() {
  yield takeLatest(COMMUNITY_POPULAR_GET_REQUEST, communityPopularGet);
}

function* watchCommunityNewGet() {
  yield takeLatest(COMMUNITY_NEW_GET_REQUEST, communityNewGet);
}

export default function* communitySaga() {
  yield all([
    fork(watchCommunityPost),
    fork(watchCommunityGet),
    fork(watchCommunityOneGet),
    fork(watchReplyPost),
    fork(watchCommunityCategoryGet),
    fork(watchCommunityPopularGet),
    fork(watchCommunityNewGet),
    fork(watchReplyDelete),
    fork(watchCommunityLikePost),
  ]);
}
