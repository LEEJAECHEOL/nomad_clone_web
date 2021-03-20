import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import user from "./user";
import community from "./community";

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
  });
export default rootReducer;
