const initialState = {
  products: [],
  searchQuery: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    default:
      return state;
  }
};

export default productReducer;
