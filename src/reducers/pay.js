import produce from "immer";

// 상태
export const initialState = {
  payPostLoading: false,
  payPostDone: false,
  payPostError: null,
  payGetLoading: false,
  payGetDone: false,
  payGetError: null,

  payLost: [],
};

export const PAY_POST_REQUEST = "PAY_POST_REQUEST";
export const PAY_POST_SUCCESS = "PAY_POST_SUCCESS";
export const PAY_POST_FAILURE = "PAY_POST_FAILURE";

export const PAY_GET_REQUEST = "PAY_GET_REQUEST";
export const PAY_GET_SUCCESS = "PAY_GET_SUCCESS";
export const PAY_GET_FAILURE = "PAY_GET_FAILURE";
// 커뮤니티

// 액션

export const payPostRequestAction = (data) => {
  return {
    type: PAY_POST_REQUEST,
    data,
  };
};
export const payGetRequestAction = (data) => {
  return {
    type: PAY_GET_REQUEST,
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
      case PAY_GET_REQUEST:
        draft.payGetLoading = true;
        draft.payGetDone = false;
        draft.payGetError = null;
        break;

      case PAY_GET_SUCCESS:
        draft.payGetLoading = false;
        draft.payGetDone = true;
        draft.payList = action.data;
        break;

      case PAY_GET_FAILURE:
        draft.payGetLoading = false;
        draft.payGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
