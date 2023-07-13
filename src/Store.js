import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./component/ModelSlice"
import filterReducer from "./component/FilterSlice"

export const Store = configureStore({
        reducer: {
         model:modelReducer,
         filter:filterReducer,
        },
      });