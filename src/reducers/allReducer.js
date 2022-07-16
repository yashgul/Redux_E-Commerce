import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  cartReducer,
});
export default allReducers;
