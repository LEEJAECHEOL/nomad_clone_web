import produce from "immer";

// 상태
export const initialState = {
  payPostLoading: false,
  payPostDone: false,
  payPostError: null,

  freePostLoading: false,
  freePostDone: false,
  freePostError: null,

  payGetLoading: false,
  payGetDone: false,
  payGetError: null,

  payCheckPostLoading: false,
  payCheckPostDone: false,
  payCheckPostError: null,

  userPayGetLoading: false,
  userPayGetDone: false,
  userPayGetError: null,

  // 결제 체크용
  payCheckItem: null,

  // 사용자용 결제내역
  userPayList: [],

  // 관리자용 결제내역
  payList: [],
};

// 유료강의 결제
export const PAY_POST_REQUEST = "PAY_POST_REQUEST";
export const PAY_POST_SUCCESS = "PAY_POST_SUCCESS";
export const PAY_POST_FAILURE = "PAY_POST_FAILURE";

// 무료강의 결제
export const FREE_POST_REQUEST = "FREE_POST_REQUEST";
export const FREE_POST_SUCCESS = "FREE_POST_SUCCESS";
export const FREE_POST_FAILURE = "FREE_POST_FAILURE";

// 관리자용 결제내역
export const PAY_GET_REQUEST = "PAY_GET_REQUEST";
export const PAY_GET_SUCCESS = "PAY_GET_SUCCESS";
export const PAY_GET_FAILURE = "PAY_GET_FAILURE";

// 사용자용 결제내역
export const USER_PAY_GET_REQUEST = "USER_PAY_GET_REQUEST";
export const USER_PAY_GET_SUCCESS = "USER_PAY_GET_SUCCESS";
export const USER_PAY_GET_FAILURE = "USER_PAY_GET_FAILURE";

// 강의결제 체크
export const PAY_CHECK_POST_REQUEST = "PAY_CHECK_POST_REQUEST";
export const PAY_CHECK_POST_SUCCESS = "PAY_CHECK_POST_SUCCESS";
export const PAY_CHECK_POST_FAILURE = "PAY_CHECK_POST_FAILURE";

// 액션
// 유료강의 등록
export const payPostRequestAction = (data) => {
  return {
    type: PAY_POST_REQUEST,
    data,
  };
};

// 무료강의 등록
export const freePostRequestAction = (data) => {
  return {
    type: FREE_POST_REQUEST,
    data,
  };
};

// 관리자 결제내역
export const payGetRequestAction = (data) => {
  return {
    type: PAY_GET_REQUEST,
    data,
  };
};

// 결제체크
export const payCheckPostRequestAction = (data) => {
  return {
    type: PAY_CHECK_POST_REQUEST,
    data,
  };
};

// 사용자 결제내역
export const userPayGetRequestAction = (data) => {
  return {
    type: USER_PAY_GET_REQUEST,
    data,
  };
};

// 리듀서
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // 결제하기
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

      // 무료강의 결제하기
      case FREE_POST_REQUEST:
        draft.freePostLoading = true;
        draft.freePostDone = false;
        draft.freePostError = null;
        break;

      case FREE_POST_SUCCESS:
        draft.freePostLoading = false;
        draft.freePostDone = true;
        break;

      case FREE_POST_FAILURE:
        draft.freePostLoading = false;
        draft.freePostError = action.error;
        break;

      // 어드민 결제목록
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

      // 결제체크
      case PAY_CHECK_POST_REQUEST:
        draft.payCheckPostLoading = true;
        draft.payCheckPostDone = false;
        draft.payCheckPostError = null;
        break;

      case PAY_CHECK_POST_SUCCESS:
        draft.payCheckPostLoading = false;
        draft.payCheckPostDone = true;
        draft.payCheckItem = action.data;
        break;

      case PAY_CHECK_POST_FAILURE:
        draft.payCheckPostLoading = false;
        draft.payCheckPostError = action.error;
        break;

      // 대시보드페이지 결제목록
      case USER_PAY_GET_REQUEST:
        draft.userPayGetLoading = true;
        draft.userPayGetDone = false;
        draft.userPayGetError = null;
        break;

      case USER_PAY_GET_SUCCESS:
        draft.userPayGetLoading = false;
        draft.userPayGetDone = true;
        draft.userPayList = action.data;
        break;

      case USER_PAY_GET_FAILURE:
        draft.userPayGetLoading = false;
        draft.userPayGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
