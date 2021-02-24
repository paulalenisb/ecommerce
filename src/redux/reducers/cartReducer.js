import * as actionTypes from "../shoppingTypes"

const CART_INITIAL_STATE = {
    cartItems: [],
  };

  const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            
            const item = state.data.find((product) => product.id === action.payload.id);
            const inCard = state.cartItems.find((item) => item.id === action.payload.id ? true : false);
      
            return {
              ...state,
              cartItems: inCard ? state.cartItems.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.cartItems, { ...item, qty: 1 }]
            };
      
          case actionTypes.REMOVE_FROM_CART:
            return {
              ...state,
              cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
            };
      
          case actionTypes.ADJUST_QTY:
            return {
              ...state,
              cartItemst: state.map((item) => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            };
          default:
            return state
    }
  }

  export default cartReducer;