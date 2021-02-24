import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)) )

export default Store;