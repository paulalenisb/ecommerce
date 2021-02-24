

const DefaultState = {
  loading: false,
  data: [],
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
    default:
      return state
  }
};

export default ProductListReducer;