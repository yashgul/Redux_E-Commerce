import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cartReducer,
});
export default allReducers;
