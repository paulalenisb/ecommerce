import * as actionTypes from "../shoppingTypes"

const DefaultState = {
  loading: false,
  data: [],
  cart: [],
  errorMsg: "",
};

const ProductListReducer = (state = DefaultState, action) => {

  switch (action.type) {

    case "PRODUCTS_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };

    case "PRODUCTS_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get products"
      };

    case "PRODUCTS_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };

    case actionTypes.ADD_TO_CART:
      const item = state.data.find((product) => product.id === action.payload.id);
      const inCard = state.cart.find((item) => item.id === action.payload.id ? true : false);

      return {
        ...state,
        cart: inCard ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cart, { ...item, qty: 1 }]
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.map((item) => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
      };
    default:
      return state
  }
};

export default ProductListReducer;