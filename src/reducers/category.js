import produce from "immer";

// 상태
export const initialState = {
  categoryGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  categorydGetDone: false,
  categorydGetError: null,
  categoryList: null,
};

export const CATEGORY_GET_REQUEST = "CATEGORY_GET_REQUEST";
export const CATEGORY_GET_SUCCESS = "CATEGORY_GET_SUCCESS";
export const CATEGORY_GET_FAILURE = "CATEGORY_GET_FAILURE";

// 커뮤니티

// 액션

export const categoryGetRequestAction = (data) => {
  return {
    type: CATEGORY_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // get
      case CATEGORY_GET_REQUEST:
        draft.categoryGetLoading = true;
        draft.categoryGetDone = false;
        draft.categoryGetError = null;
        break;

      case CATEGORY_GET_SUCCESS:
        draft.categoryGetLoading = false;
        draft.categoryGetDone = true;
        draft.categoryList = action.data;
        break;

      case CATEGORY_GET_FAILURE:
        draft.categoryItemGetLoading = false;
        draft.categoryItemGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
