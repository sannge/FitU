import { combineReducers } from "@reduxjs/toolkit";
import workoutReducer from "./WorkoutReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  workout: workoutReducer,
  auth: authReducer,
});

export default rootReducer;
