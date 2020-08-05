import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "../features/personal/personalSlice";

export default configureStore({
  reducer: {
    personal: personalReducer,
  },
});
