import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import community from "./community";
import faq from "./faq";
import category from "./category";
import courses from "./courses";
import video from "./video";
import dashboard from "./dashboard";
import adminCourses from "./admin/courses/courses";
import tech from "./admin/courses/tech";
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
    courses,
    category,
    dashboard,
    adminCourses,
    adminVideo,
    video,
    tech,
  });
export default rootReducer;
