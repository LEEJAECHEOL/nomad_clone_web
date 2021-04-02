import produce from "immer";

// 상태
export const initialState = {
  // 포스트
  techPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  techPostDone: false,
  techPostError: null,
};

export const TECH_POST_REQUEST = "TECH_POST_REQUEST";
export const TECH_POST_SUCCESS = "TECH_POST_SUCCESS";
export const TECH_POST_FAILURE = "TECH_POST_FAILURE";

// 커뮤니티

// 액션

export const techPostRequestAction = (data) => {
  return {
    type: TECH_POST_REQUEST,
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

      default:
        return state;
    }
  });
};
export default reducer;
