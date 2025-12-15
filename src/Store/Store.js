import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Store/taskSLice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
