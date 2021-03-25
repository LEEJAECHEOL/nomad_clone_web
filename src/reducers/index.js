import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import community from "./community";
import faq from "./faq";
import reply from "./reply";
import dashboard from "./dashboard";
import adminCourses from "./admin/courses/courses";
import adminVideo from "./admin/video/";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    index: (state = {}, action) => {
      switch (action.type) {
        default:
          return state;
      }
    },
    user,
    community,
    faq,
    reply,
    dashboard,
    adminCourses,
    adminVideo,
  });
export default rootReducer;
