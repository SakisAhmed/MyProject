import { combineReducers } from "redux";
import { menuReducers } from "./menu";
export const rootReducer = combineReducers({ menuReducers});