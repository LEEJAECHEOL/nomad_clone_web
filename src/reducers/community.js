import produce from "immer";

// 상태
export const initialState = {
  communityPostLoading: false,
  communityPostDone: false,
  communityPostError: null,

  communityGetLoading: false,
  communityGetDone: false,
  communityGetError: null,

  communityOneGetLoading: false,
  communityOneGetDone: false,
  communityOneGetError: null,

  communityCategoryGetLoading: false,
  communityCategoryGetDone: false,
  communityCategoryGetError: null,

  communityList: null,
  communityItem: null,

  replyPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  replyPostDone: false,
  replyPostError: null,
};

// 타입
export const COMMUNITY_POST_REQUEST = "COMMUNITY_POST_REQUEST";
export const COMMUNITY_POST_SUCCESS = "COMMUNITY_POST_SUCCESS";
export const COMMUNITY_POST_FAILURE = "COMMUNITY_POST_FAILURE";

export const COMMUNITY_GET_REQUEST = "COMMUNITY_GET_REQUEST";
export const COMMUNITY_GET_SUCCESS = "COMMUNITY_GET_SUCCESS";
export const COMMUNITY_GET_FAILURE = "COMMUNITY_GET_FAILURE";

export const COMMUNITY_ONE_GET_REQUEST = "COMMUNITY_ONE_GET_REQUEST";
export const COMMUNITY_ONE_GET_SUCCESS = "COMMUNITY_ONE_GET_SUCCESS";
export const COMMUNITY_ONE_GET_FAILURE = "COMMUNITY_ONE_GET_FAILURE";

export const COMMUNITY_CATEGORY_GET_REQUEST = "COMMUNITY_CATEGORY_GET_REQUEST";
export const COMMUNITY_CATEGORY_GET_SUCCESS = "COMMUNITY_CATEGORY_GET_SUCCESS";
export const COMMUNITY_CATEGORY_GET_FAILURE = "COMMUNITY_CATEGORY_GET_FAILURE";

export const REPLY_POST_REQUEST = "reply_POST_REQUEST";
export const REPLY_POST_SUCCESS = "reply_POST_SUCCESS";
export const REPLY_POST_FAILURE = "reply_POST_FAILURE";
// 커뮤니티

// 리플리액션
export const replyPostRequestAction = (data) => {
  return {
    type: REPLY_POST_REQUEST,
    data,
  };
};

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

export const communityOneGetRequestAction = (data) => {
  return {
    type: COMMUNITY_ONE_GET_REQUEST,
    data,
  };
};

export const communityCategoryGetRequestAction = (data) => {
  return {
    type: COMMUNITY_CATEGORY_GET_REQUEST,
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

      // 1개 찾기
      case COMMUNITY_ONE_GET_REQUEST:
        draft.communityOneGetLoading = true;
        draft.communityOneGetDone = false;
        draft.communityOneGetError = null;
        break;

      case COMMUNITY_ONE_GET_SUCCESS:
        draft.communityOneGetLoading = false;
        draft.communityOneGetDone = true;
        draft.communityItem = action.data;
        break;

      case COMMUNITY_ONE_GET_FAILURE:
        draft.communityGetLoading = false;
        draft.communityGetError = action.error;
        break;

      // 카테고리아이디로 찾기
      case COMMUNITY_CATEGORY_GET_REQUEST:
        draft.communityCategoryGetLoading = true;
        draft.communityCategoryGetDone = false;
        draft.communityCategoryGetError = null;
        break;

      case COMMUNITY_CATEGORY_GET_SUCCESS:
        draft.communityGetLoading = false;
        draft.communityGetDone = true;
        draft.communityList = action.data;
        break;

      case COMMUNITY_CATEGORY_GET_FAILURE:
        draft.communityGetLoading = false;
        draft.communityGetError = action.error;
        break;

      // 리플리
      case REPLY_POST_REQUEST:
        draft.replyPostLoading = true;
        draft.replyPostDone = false;
        draft.replyPostError = null;
        break;

      case REPLY_POST_SUCCESS:
        draft.replyPostLoading = false;
        draft.replyPostDone = true;
        draft.communityItem.replys.unshift(action.data);
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
