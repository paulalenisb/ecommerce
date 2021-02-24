import { combineReducers } from "redux";
import ProductListReducer from "./ProductReducer";
import cartReducer from "./cartReducer"

const RootReducer = combineReducers({
    ProductList: ProductListReducer,
    cart: cartReducer,
});

export default RootReducer;