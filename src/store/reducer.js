import { combineReducers } from "redux";
import { reducer as headerReducer } from "../common/header/store";
import {reducer as homeReducer} from "../pages/home/store";
import {reducer as detailReducer} from "../pages/detail/store";
import {reducer as loginReducer} from "../pages/login/store";
export default combineReducers({
  headerReducer,
  homeReducer,
  detailReducer,
  loginReducer
});
