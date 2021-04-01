import produce from "immer";

// 상태
export const initialState = {
  videoGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  videoGetDone: false,
  videoGetError: null,

  videoReplyPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  videoReplyPostDone: false,
  videoReplyPostError: null,

  videoReplyDeleteLoading: false, // 로그인 시도중 -> 로딩창 띄움
  videoReplyDeleteDone: false,
  videoReplyDeleteError: null,

  videoList: null,
};

// 비디오 가져오기
export const VIDEO_GET_REQUEST = "VIDEO_GET_REQUEST";
export const VIDEO_GET_SUCCESS = "VIDEO_GET_SUCCESS";
export const VIDEO_GET_FAILURE = "VIDEO_GET_FAILURE";

// 비디오페이지 댓글 작성
export const VIDEO_REPLY_POST_REQUEST = "VIDEO_REPLY_POST_REQUEST";
export const VIDEO_REPLY_POST_SUCCESS = "VIDEO_REPLY_POST_SUCCESS";
export const VIDEO_REPLY_POST_FAILURE = "VIDEO_REPLY_POST_FAILURE";

// 비디오페이지 댓글 삭제
export const VIDEO_REPLY_DELETE_REQUEST = "VIDEO_REPLY_DELETE_REQUEST";
export const VIDEO_REPLY_DELETE_SUCCESS = "VIDEO_REPLY_DELETE_SUCCESS";
export const VIDEO_REPLY_DELETE_FAILURE = "VIDEO_REPLY_DELETE_FAILURE";

// 액션
// 비디오 가져오기
export const videoGetRequestAction = (data) => {
  return {
    type: VIDEO_GET_REQUEST,
    data,
  };
};

// 비디오 댓글 작성하기
export const videoReplyPostRequestAction = (data) => {
  return {
    type: VIDEO_REPLY_POST_REQUEST,
    data,
  };
};

// 비디오 댓글삭제
export const videoReplyDeleteRequestAction = (data) => {
  return {
    type: VIDEO_REPLY_DELETE_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // 비디오 가져오기
      case VIDEO_GET_REQUEST:
        draft.videoGetLoading = true;
        draft.videoGetDone = false;
        draft.videoGetError = null;
        break;

      case VIDEO_GET_SUCCESS:
        draft.videoGetLoading = false;
        draft.videoGetDone = true;
        draft.videoList = action.data;
        break;

      case VIDEO_GET_FAILURE:
        draft.videoGetLoading = false;
        draft.videoGetError = action.error;
        break;

      // 비디오 댓글 작성
      case VIDEO_REPLY_POST_REQUEST:
        draft.videoReplyPostLoading = true;
        draft.videoReplyPostDone = false;
        draft.videoReplyPostError = null;
        break;

      case VIDEO_REPLY_POST_SUCCESS:
        draft.videoReplyPostLoading = false;
        draft.videoReplyPostDone = true;
        draft.videoList.videoReplys.unshift(action.data);
        break;

      case VIDEO_REPLY_POST_FAILURE:
        draft.videoReplyPostLoading = false;
        draft.videoReplyPostError = action.error;
        break;

      // 비디오 댓글 삭제
      case VIDEO_REPLY_DELETE_REQUEST:
        draft.videoReplyDeleteLoading = true;
        draft.videoReplyDeleteDone = false;
        draft.videoReplyDeleteError = null;
        break;

      case VIDEO_REPLY_DELETE_SUCCESS:
        draft.videoReplyDeleteLoading = false;
        draft.videoReplyDeleteDone = true;
        break;

      case VIDEO_REPLY_DELETE_FAILURE:
        draft.videoReplyDeleteLoading = false;
        draft.videoReplyDeleteError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
