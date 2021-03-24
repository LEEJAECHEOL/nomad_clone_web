import produce from "immer";
import arrayMove from "array-move";

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

  videoPostLoading: false,
  videoPostDone: false,
  videoPostError: null,

  videoList: [],

  videoContent: {
    id: null,
    folderId: 1, // 나중에 변경할 예정
    contents: [],
    contentList: [],
  },
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

export const VIDEO_POST_REQUEST = "VIDEO_POST_REQUEST";
export const VIDEO_POST_SUCCESS = "VIDEO_POST_SUCCESS";
export const VIDEO_POST_FAILURE = "VIDEO_POST_FAILURE";

// saga 안씀.========================================================

export const VIDEO_CONTENT_LIST_SAVE = "VIDEO_CONTENT_LIST_SAVE";
export const VIDEO_CONTENT_LIST_DELETE = "VIDEO_CONTENT_LIST_DELETE";

export const VIDEO_CONTENT_ITEM_LIST_TITLE_SAVE =
  "VIDEO_CONTENT_ITEM_LIST_TITLE_SAVE";
export const VIDEO_CONTENT_ITEM_LIST_SAVE = "VIDEO_CONTENT_ITEM_LIST_SAVE";
export const VIDEO_CONTENT_ITEM_LIST_DELETE = "VIDEO_CONTENT_ITEM_LIST_DELETE";

export const VIDEO_CONTENT_ITEM_LIST_SORT = "VIDEO_CONTENT_ITEM_LIST_SORT";

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

export const videoPostRequestAction = (data) => {
  return {
    type: VIDEO_POST_REQUEST,
    data,
  };
};

// 사가 안쓰는 액션
export const videoContentsListSaveAction = (data) => {
  console.log(data);
  return {
    type: VIDEO_CONTENT_LIST_SAVE,
    data: data,
  };
};
export const videoContentsListDeleteAction = (data) => {
  return {
    type: VIDEO_CONTENT_LIST_DELETE,
    data: data,
  };
};
export const videoContentsItemListTitleSaveAction = (data) => {
  return {
    type: VIDEO_CONTENT_ITEM_LIST_TITLE_SAVE,
    data: data,
  };
};
export const videoContentsItemListSaveAction = (data) => {
  return {
    type: VIDEO_CONTENT_ITEM_LIST_SAVE,
    data: data,
  };
};
export const videoContentsItemListDeleteAction = (data) => {
  return {
    type: VIDEO_CONTENT_ITEM_LIST_DELETE,
    data: data,
  };
};
export const videoContentsItemListSortAction = (data) => {
  return {
    type: VIDEO_CONTENT_ITEM_LIST_SORT,
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

      case VIDEO_POST_REQUEST:
        draft.videoPostLoading = true;
        draft.videoPostDone = false;
        draft.videoPostError = null;
        break;

      case VIDEO_POST_SUCCESS:
        draft.videoPostLoading = false;
        draft.videoPostDone = true;
        break;

      case VIDEO_POST_FAILURE:
        draft.videoPostLoading = false;
        draft.videoPostError = action.error;
        break;

      // ========================================== saga 않씀 ====================================
      case VIDEO_CONTENT_LIST_SAVE:
        draft.videoContent.contents.push(action.data);
        draft.videoContent.contentList.push([]);
        break;
      case VIDEO_CONTENT_ITEM_LIST_TITLE_SAVE:
        draft.videoContent.contentList[action.data.index].push({
          title: action.data.title,
          vimeoId: "",
          isFree: false,
        });
        break;
      case VIDEO_CONTENT_ITEM_LIST_SAVE:
        console.log(action.data.data);
        draft.videoContent.contentList[action.data.collection][
          action.data.index
        ] = action.data.data;
        break;
      case VIDEO_CONTENT_LIST_DELETE:
        console.log(action.data);
        draft.videoContent.contents = draft.videoContent.contents.filter(
          (v, index) => index !== action.data
        );
        draft.videoContent.contentList = draft.videoContent.contentList.filter(
          (v, index) => index !== action.data
        );

        break;
      case VIDEO_CONTENT_ITEM_LIST_DELETE:
        draft.videoContent.contentList[
          action.data.collection
        ] = draft.videoContent.contentList[action.data.collection].filter(
          (v, index) => index !== action.data.index
        );
        break;
      case VIDEO_CONTENT_ITEM_LIST_SORT:
        draft.videoContent.contentList[action.data.collection] = arrayMove(
          draft.videoContent.contentList[action.data.collection],
          action.data.oldIndex,
          action.data.newIndex
        );
        break;

      default:
        return state;
    }
  });
};
export default reducer;
