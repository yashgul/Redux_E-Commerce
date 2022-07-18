import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartReducer,
  itemReducer,
});
export default allReducers;
