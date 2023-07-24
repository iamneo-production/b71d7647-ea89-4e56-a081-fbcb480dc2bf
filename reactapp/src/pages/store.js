import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './sample';
const Store = configureStore({
  reducer:{
    user:userReducer,
  },
});
export default Store;