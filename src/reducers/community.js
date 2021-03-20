import produce from "immer";

// 상태
export const initialState = {
  communityPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  communityPostDone: false,
  communityPostError: null,
  communityGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  communityGetDone: false,
  communityGetError: null,
  communityList: null,
};

// 타입
export const COMMUNITY_POST_REQUEST = "COMMUNITY_POST_REQUEST";
export const COMMUNITY_POST_SUCCESS = "COMMUNITY_POST_SUCCESS";
export const COMMUNITY_POST_FAILURE = "COMMUNITY_POST_FAILURE";

export const COMMUNITY_GET_REQUEST = "COMMUNITY_GET_REQUEST";
export const COMMUNITY_GET_SUCCESS = "COMMUNITY_GET_SUCCESS";
export const COMMUNITY_GET_FAILURE = "COMMUNITY_GET_FAILURE";
// 커뮤니티

// 액션

export const communityPostRequestAction = (data) => {
  return {
    type: COMMUNITY_POST_REQUEST,
    data,
  };
};

export const communityGetRequestAction = (data) => {
  return {
    type: COMMUNITY_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case COMMUNITY_POST_REQUEST:
        draft.communityPostLoading = true;
        draft.communityPostDone = false;
        draft.communityPostError = null;
        break;

      case COMMUNITY_POST_SUCCESS:
        draft.communityPostLoading = false;
        draft.communityPostDone = true;
        break;

      case COMMUNITY_POST_FAILURE:
        draft.communityPostLoading = false;
        draft.communityPostError = action.error;
        break;

      // get
      case COMMUNITY_GET_REQUEST:
        draft.communityGetLoading = true;
        draft.communityGetDone = false;
        draft.communityGetError = null;
        break;

      case COMMUNITY_GET_SUCCESS:
        draft.communityGetLoading = false;
        draft.communityGetDone = true;
        draft.communityList = action.data;
        break;

      case COMMUNITY_GET_FAILURE:
        draft.communityGetLoading = false;
        draft.communityGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
