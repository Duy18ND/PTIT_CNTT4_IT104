import { combineReducers } from "redux";
import { userReducer } from "./Profile";
import { listUserReducer } from "./ListUser";
import { couterReducer } from "./Couter";
import { randomReducer } from "./Random";
import { changeStateReducer } from "./ChangeState";
import { darkOrLightReducer } from "./DarkOrLight";
import { authReducer } from "./authReducer";
import { authReducer08 } from "./authReducer08";

export const RootReducer = combineReducers({
  EXERCISE01: userReducer,
  EXERCISE02: listUserReducer,
  EXERCISE03: couterReducer,
  EXERCISE04: randomReducer,
  EXERCISE05: changeStateReducer,
  EXERCISE06: darkOrLightReducer,
  EXERCISE07: authReducer,
  EXERCISE08: authReducer08
});
