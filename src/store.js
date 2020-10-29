import { createStore, applyMiddleware } from "redux";
import HomeReducer from "./screens/Home/HomeReducer";
import ReduxPromise from "redux-promise";

const store = createStore(HomeReducer, applyMiddleware(ReduxPromise));

export default store;
