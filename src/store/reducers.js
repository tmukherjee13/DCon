import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";
// Authentication Module
import Login from "./auth/login/reducer";
import Forget from "./auth/forgetpwd/reducer";

const rootReducer = combineReducers({
  Layout,
  // Authentication
  Login,
  Forget
});

export default rootReducer;
