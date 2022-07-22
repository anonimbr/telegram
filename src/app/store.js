import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "../features/threadSlice";
import userReducer from "../features/userSlice";
// import chatReducer from "../features/chatSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer
    // chat: chatReducer
  }
});
