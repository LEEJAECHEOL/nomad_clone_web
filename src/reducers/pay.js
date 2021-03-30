import produce from "immer";

// 상태
export const initialState = {
  payPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  payPostDone: false,
  payPostError: null,
};

export const PAY_POST_REQUEST = "PAY_POST_REQUEST";
export const PAY_POST_SUCCESS = "PAY_POST_SUCCESS";
export const PAY_POST_FAILURE = "PAY_POST_FAILURE";

// 커뮤니티

// 액션

export const payPostRequestAction = (data) => {
  return {
    type: PAY_POST_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // get
      case PAY_POST_REQUEST:
        draft.payPostLoading = true;
        draft.payPostDone = false;
        draft.payPostError = null;
        break;

      case PAY_POST_SUCCESS:
        draft.payPostLoading = false;
        draft.payPostDone = true;
        break;

      case PAY_POST_FAILURE:
        draft.payPostLoading = false;
        draft.payPostError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
