import produce from "immer";

// 상태
export const initialState = {
  dashBoardGetLoading: false, // 로그인 시도중 -> 로딩창 띄움
  dashBoardGetDone: false,
  dashBoardGetError: null,
  dashBoardItem: null,
};

export const DASHBOARD_GET_REQUEST = "DASHBOARD_GET_REQUEST";
export const DASHBOARD_GET_SUCCESS = "DASHBOARD_GET_SUCCESS";
export const DASHBOARD_GET_FAILURE = "DASHBOARD_GET_FAILURE";

// 커뮤니티

// 액션

export const dashBoadrGetRequestAction = (data) => {
  return {
    type: DASHBOARD_GET_REQUEST,
    data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // get
      case DASHBOARD_GET_REQUEST:
        draft.dashBoardGetLoading = true;
        draft.dashBoardGetDone = false;
        draft.dashBoardGetError = null;
        break;

      case DASHBOARD_GET_SUCCESS:
        draft.dashBoardGetLoading = false;
        draft.dashBoardGetDone = true;
        draft.dashBoardItem = action.data;
        break;

      case DASHBOARD_GET_FAILURE:
        draft.dashBoardItemGetLoading = false;
        draft.dashBoardItemGetError = action.error;
        break;

      default:
        return state;
    }
  });
};
export default reducer;
