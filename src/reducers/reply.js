import produce from "immer";

// 상태
export const initialState = {
  replyPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  replyPostDone: false,
  replyPostError: null,
  replyItem: null,
};

// 타입
export const REPLY_POST_REQUEST = "reply_POST_REQUEST";
export const REPLY_POST_SUCCESS = "reply_POST_SUCCESS";
export const REPLY_POST_FAILURE = "reply_POST_FAILURE";

// 액션

export const replyPostRequestAction = (data) => {
  return {
    type: REPLY_POST_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REPLY_POST_REQUEST:
        draft.replyPostLoading = true;
        draft.replyPostDone = false;
        draft.replyPostError = null;
        break;

      case REPLY_POST_SUCCESS:
        draft.replyPostLoading = false;
        draft.replyPostDone = true;
        break;

      case REPLY_POST_FAILURE:
        draft.replyPostLoading = false;
        draft.replyPostError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
