import produce from "immer";

// 상태
export const initialState = {
  faqPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqPostDone: false,
  faqPostError: null,

  faqUpdateLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqUpdateDone: false,
  faqUpdateError: null,

  faqGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqGetDone: false,
  faqGetError: null,

  faqOneGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqOneGetDone: false,
  faqOneGetError: null,
  faqList: null,
  faqItem: null,
};

// 타입
export const FAQ_POST_REQUEST = "FAQ_POST_REQUEST";
export const FAQ_POST_SUCCESS = "FAQ_POST_SUCCESS";
export const FAQ_POST_FAILURE = "FAQ_POST_FAILURE";

export const FAQ_UPDATE_REQUEST = "FAQ_UPDATE_REQUEST";
export const FAQ_UPDATE_SUCCESS = "FAQ_UPDATE_SUCCESS";
export const FAQ_UPDATE_FAILURE = "FAQ_UPDATE_FAILURE";

export const FAQ_GET_REQUEST = "FAQ_GET_REQUEST";
export const FAQ_GET_SUCCESS = "FAQ_GET_SUCCESS";
export const FAQ_GET_FAILURE = "FAQ_GET_FAILURE";

export const FAQ_ONE_GET_REQUEST = "FAQ_ONE_GET_REQUEST";
export const FAQ_ONE_GET_SUCCESS = "FAQ_ONE_GET_SUCCESS";
export const FAQ_ONE_GET_FAILURE = "FAQ_ONE_GET_FAILURE";
// 커뮤니티

// 액션

export const faqPostRequestAction = (data) => {
  return {
    type: FAQ_POST_REQUEST,
    data,
  };
};

export const faqUpdateRequestAction = (data) => {
  return {
    type: FAQ_UPDATE_REQUEST,
    data,
  };
};

export const faqGetRequestAction = (data) => {
  return {
    type: FAQ_GET_REQUEST,
    data,
  };
};

export const faqOneGetRequestAction = (data) => {
  return {
    type: FAQ_ONE_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // post
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

      // update
      case FAQ_UPDATE_REQUEST:
        draft.faqUpdateLoading = true;
        draft.faqUpdateDone = false;
        draft.faqUpdateError = null;
        break;

      case FAQ_UPDATE_SUCCESS:
        draft.faqUpdateLoading = false;
        draft.faqUpdateDone = true;
        break;

      case FAQ_UPDATE_FAILURE:
        draft.faqUpdateLoading = false;
        draft.faqUpdateError = action.error;
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

      // 한건만찾기
      case FAQ_ONE_GET_REQUEST:
        draft.faqOneGetLoading = true;
        draft.faqOneGetDone = false;
        draft.faqOneGetError = null;
        break;

      case FAQ_ONE_GET_SUCCESS:
        draft.faqOneGetLoading = false;
        draft.faqOneGetDone = true;
        draft.faqItem = action.data;
        break;

      case FAQ_ONE_GET_FAILURE:
        draft.faqOneGetLoading = false;
        draft.faqOneGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
