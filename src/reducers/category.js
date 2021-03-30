import produce from "immer";

// 상태
export const initialState = {
  categoryGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  categoryGetDone: false,
  categoryGetError: null,

  // 포스트
  categoryPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  categoryPostDone: false,
  categoryPostError: null,

  faqCategoryPostLoading: false, // 로그인 시도중 -> 로딩창 띄움
  faqCategoryPostDone: false,
  faqCategoryPostError: null,

  categoryList: [],
};

export const CATEGORY_GET_REQUEST = "CATEGORY_GET_REQUEST";
export const CATEGORY_GET_SUCCESS = "CATEGORY_GET_SUCCESS";
export const CATEGORY_GET_FAILURE = "CATEGORY_GET_FAILURE";

export const CATEGORY_POST_REQUEST = "CATEGORY_POST_REQUEST";
export const CATEGORY_POST_SUCCESS = "CATEGORY_POST_SUCCESS";
export const CATEGORY_POST_FAILURE = "CATEGORY_POST_FAILURE";

export const FAQ_CATEGORY_POST_REQUEST = "FAQ_CATEGORY_POST_REQUEST";
export const FAQ_CATEGORY_POST_SUCCESS = "FAQ_CATEGORY_POST_SUCCESS";
export const FAQ_CATEGORY_POST_FAILURE = "FAQ_CATEGORY_POST_FAILURE";
// 커뮤니티

// 액션

export const categoryGetRequestAction = (data) => {
  return {
    type: CATEGORY_GET_REQUEST,
    data,
  };
};

export const categoryPostRequestAction = (data) => {
  return {
    type: CATEGORY_POST_REQUEST,
    data,
  };
};

export const faqCategoryPostRequestAction = (data) => {
  return {
    type: FAQ_CATEGORY_POST_REQUEST,
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

      // 카테고리 저장
      case CATEGORY_POST_REQUEST:
        draft.categoryPostLoading = true;
        draft.categoryPostDone = false;
        draft.categoryPostError = null;
        break;

      case CATEGORY_POST_SUCCESS:
        draft.categoryPostLoading = false;
        draft.categoryPostDone = true;
        draft.categoryList.push(action.data);
        break;

      case CATEGORY_POST_FAILURE:
        draft.categoryPostLoading = false;
        draft.categoryPostError = action.error;
        break;

      // FAQ카테고리 저장
      case FAQ_CATEGORY_POST_REQUEST:
        draft.faqCategoryPostLoading = true;
        draft.faqcategoryPostDone = false;
        draft.faqcategoryPostError = null;
        break;

      case FAQ_CATEGORY_POST_SUCCESS:
        draft.faqcategoryPostLoading = false;
        draft.faqcategoryPostDone = true;
        break;

      case FAQ_CATEGORY_POST_FAILURE:
        draft.faqcategoryPostLoading = false;
        draft.faqcategoryPostError = action.error;

        break;
      default:
        return state;
    }
  });
};
export default reducer;
