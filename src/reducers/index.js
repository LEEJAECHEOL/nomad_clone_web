import { combineReducers } from "redux";

import user from "./user";
import community from "./community";

const rootReducer = combineReducers({
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
