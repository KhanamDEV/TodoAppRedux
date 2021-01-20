import {combineReducers} from "redux";
import HandleTaskReducer from "./HandleTaskReducer";

const allReducer = combineReducers({
    taskReducer: HandleTaskReducer
});

export default allReducer;