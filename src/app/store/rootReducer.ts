import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "./reducers/commonSlice";

const rootReducer = combineReducers({
  common: commonReducer,
})

export default rootReducer;