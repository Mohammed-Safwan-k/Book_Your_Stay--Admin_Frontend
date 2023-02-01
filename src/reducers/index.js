import { combineReducers } from "redux";

import coupon from "./coupon";
import user from "./user";
import facility from "./facility";
import roomtype from "./roomtype";

export default combineReducers({
  coupon,
  user,
  facility,
  roomtype,
});
