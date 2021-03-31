import produce from "immer";

// 상태
export const initialState = {
  // 포스트
  techPostLoading: false,
  techPostDone: false,
  techPostError: null,
  techGetLoading: false,
  techGetDone: false,
  techGetError: null,

  techList: [],
};

export const TECH_POST_REQUEST = "TECH_POST_REQUEST";
export const TECH_POST_SUCCESS = "TECH_POST_SUCCESS";
export const TECH_POST_FAILURE = "TECH_POST_FAILURE";

export const TECH_GET_REQUEST = "TECH_GET_REQUEST";
export const TECH_GET_SUCCESS = "TECH_GET_SUCCESS";
export const TECH_GET_FAILURE = "TECH_GET_FAILURE";

export const techPostRequestAction = (data) => {
  return {
    type: TECH_POST_REQUEST,
    data,
  };
};

export const techGetRequestAction = (data) => {
  return {
    type: TECH_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // Tech 저장
      case TECH_POST_REQUEST:
        draft.techPostLoading = true;
        draft.techPostDone = false;
        draft.techPostError = null;
        break;

      case TECH_POST_SUCCESS:
        draft.techPostLoading = false;
        draft.techPostDone = true;
        break;

      case TECH_POST_FAILURE:
        draft.techPostLoading = false;
        draft.techPostError = action.error;
        break;

      case TECH_GET_REQUEST:
        draft.techGetLoading = true;
        draft.techGetDone = false;
        draft.techGetError = null;
        break;

      case TECH_GET_SUCCESS:
        draft.techGetLoading = false;
        draft.techGetDone = true;
        draft.techList = action.data;
        break;

      case TECH_GET_FAILURE:
        draft.techGetLoading = false;
        draft.techGetError = action.error;
        break;
      default:
        return state;
    }
  });
};
export default reducer;
