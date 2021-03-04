import { combineReducers } from "redux";

import user from "./user";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  },
  user,
});
export default rootReducer;
