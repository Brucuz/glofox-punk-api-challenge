import { combineReducers } from "redux";
import beerListReducer from "./beerListReducer";


export default combineReducers({
  beerList: beerListReducer
});