import { combineReducers } from "redux";
import user from "./userReducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  form,
  user,
});
