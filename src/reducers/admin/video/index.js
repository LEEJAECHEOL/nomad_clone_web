import produce from "immer";

// 상태
export const initialState = {
  videoFolderAllGetLoading: false,
  videoFolderAllGetDone: false,
  videoFolderAllGetError: null,

  videoFolderPostLoading: false,
  videoFolderPostDone: false,
  videoFolderPostError: null,

  videoFolderDeleteLoading: false,
  videoFolderDeleteDone: false,
  videoFolderDeleteError: null,

  videoFolderList: null,
};

// 타입
export const VIDEO_FOLDER_ALL_GET_REQUEST = "VIDEO_FOLDER_ALL_GET_REQUEST";
export const VIDEO_FOLDER_ALL_GET_SUCCESS = "VIDEO_FOLDER_ALL_GET_SUCCESS";
export const VIDEO_FOLDER_ALL_GET_FAILURE = "VIDEO_FOLDER_ALL_GET_FAILURE";

export const VIDEO_FOLDER_POST_REQUEST = "VIDEO_FOLDER_POST_REQUEST";
export const VIDEO_FOLDER_POST_SUCCESS = "VIDEO_FOLDER_POST_SUCCESS";
export const VIDEO_FOLDER_POST_FAILURE = "VIDEO_FOLDER_POST_FAILURE";

export const VIDEO_FOLDER_DELETE_REQUEST = "VIDEO_FOLDER_DELETE_REQUEST";
export const VIDEO_FOLDER_DELETE_SUCCESS = "VIDEO_FOLDER_DELETE_SUCCESS";
export const VIDEO_FOLDER_DELETE_FAILURE = "VIDEO_FOLDER_DELETE_FAILURE";

// 액션
export const videoFolderPostRequestAction = (data) => {
  return {
    type: VIDEO_FOLDER_POST_REQUEST,
    data,
  };
};

export const videoFolderAllGetRequestAction = () => {
  return {
    type: VIDEO_FOLDER_ALL_GET_REQUEST,
  };
};
export const videoFolderDeleteRequestAction = (data) => {
  return {
    type: VIDEO_FOLDER_DELETE_REQUEST,
    data: data,
  };
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case VIDEO_FOLDER_POST_REQUEST:
        draft.videoFolderPostLoading = true;
        draft.videoFolderPostDone = false;
        draft.videoFolderPostError = null;
        break;

      case VIDEO_FOLDER_POST_SUCCESS:
        draft.videoFolderPostLoading = false;
        draft.videoFolderPostDone = true;
        draft.videoFolderList.push(action.data);
        break;

      case VIDEO_FOLDER_POST_FAILURE:
        draft.videoFolderPostLoading = false;
        draft.videoFolderPostError = action.error;
        break;

      case VIDEO_FOLDER_ALL_GET_REQUEST:
        draft.videoFolderAllGetLoading = true;
        draft.videoFolderAllGetDone = false;
        draft.videoFolderAllGetError = null;
        break;

      case VIDEO_FOLDER_ALL_GET_SUCCESS:
        draft.videoFolderAllGetLoading = false;
        draft.videoFolderAllGetDone = true;
        draft.videoFolderList = action.data;
        break;

      case VIDEO_FOLDER_ALL_GET_FAILURE:
        draft.videoFolderAllGetLoading = false;
        draft.videoFolderAllGetError = action.error;
        break;

      case VIDEO_FOLDER_DELETE_REQUEST:
        draft.videoFolderDeleteLoading = true;
        draft.videoFolderDeleteDone = false;
        draft.videoFolderDeleteError = null;
        break;

      case VIDEO_FOLDER_DELETE_SUCCESS:
        draft.videoFolderDeleteLoading = false;
        draft.videoFolderDeleteDone = true;
        draft.videoFolderList = draft.videoFolderList.filter(
          (v) => v.id !== action.data.id
        );
        break;

      case VIDEO_FOLDER_DELETE_FAILURE:
        draft.videoFolderDeleteLoading = false;
        draft.videoFolderDeleteError = action.error;
        break;
      default:
        return state;
    }
  });
};
export default reducer;
