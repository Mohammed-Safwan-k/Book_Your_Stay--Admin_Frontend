import { combineReducers } from "redux";

import coupon from "./coupon";
import user from "./user";

export default combineReducers({
  coupon,
  user,
});
