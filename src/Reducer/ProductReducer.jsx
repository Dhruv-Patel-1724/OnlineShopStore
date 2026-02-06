
const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      // const featureData = action.payload.filter((curElem) => 
      //     (curElem) => curElem.featured === true
      // );
       const featureData = action.payload.slice(0, 20);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: false,
      };

      case "SET_SINGLE_PRODUCT": 
      return{
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      }

      case "SET_SINGLE_ERROR":
        return{
          ...state,
      
        isSingleLoading: false,
        isError: true,
          };

    default:
      return state;
  }
};

export default ProductReducer;

