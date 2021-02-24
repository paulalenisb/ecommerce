import { combineReducers } from "redux";
import ProductListReducer from "./ProductReducer";

const RootReducer = combineReducers({
    ProductList: ProductListReducer,
});

export default RootReducer;