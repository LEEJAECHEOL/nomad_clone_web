import produce from "immer";

// 상태
export const initialState = {
  faqPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqPostDone: false,
  faqPostError: null,
  faqGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqGetDone: false,
  faqGetError: null,
  faqList: null,
};

// 타입
export const FAQ_POST_REQUEST = "FAQ_POST_REQUEST";
export const FAQ_POST_SUCCESS = "FAQ_POST_SUCCESS";
export const FAQ_POST_FAILURE = "FAQ_POST_FAILURE";

export const FAQ_GET_REQUEST = "FAQ_GET_REQUEST";
export const FAQ_GET_SUCCESS = "FAQ_GET_SUCCESS";
export const FAQ_GET_FAILURE = "FAQ_GET_FAILURE";
// 커뮤니티

// 액션

export const faqPostRequestAction = (data) => {
  return {
    type: FAQ_POST_REQUEST,
    data,
  };
};

export const faqGetRequestAction = (data) => {
  return {
    type: FAQ_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FAQ_POST_REQUEST:
        draft.faqPostLoading = true;
        draft.faqPostDone = false;
        draft.faqPostError = null;
        break;

      case FAQ_POST_SUCCESS:
        draft.faqPostLoading = false;
        draft.faqPostDone = true;
        break;

      case FAQ_POST_FAILURE:
        draft.faqPostLoading = false;
        draft.faqPostError = action.error;
        break;

      // get
      case FAQ_GET_REQUEST:
        draft.faqGetLoading = true;
        draft.faqGetDone = false;
        draft.faqGetError = null;
        break;

      case FAQ_GET_SUCCESS:
        draft.faqGetLoading = false;
        draft.faqGetDone = true;
        draft.faqList = action.data;
        break;

      case FAQ_GET_FAILURE:
        draft.faqGetLoading = false;
        draft.faqGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
