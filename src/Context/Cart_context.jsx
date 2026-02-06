import { createContext, useContext, useEffect, useReducer } from "react";
import Product from "../components/Product";
import reducer from "../Reducer/cartReducer";


const CartContext = createContext();

const getLocalCartData = () => {
let LocalCartData = localStorage.getItem("PatelStore");
if(LocalCartData == []) {
    return [];
    
} else {
    return JSON.parse(LocalCartData);
} 
}

const initialState ={
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee:50,
}

const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

const addToCart = (id,amount, color, product) => {
dispatch({type: "ADD_TO_CART", payload: {id,amount, color, product}
});
}

// Increment Decrement + -

const setDecrement = (id) => {
    dispatch ({type : "SET_DECREMENT", payload:id})
}

const setIncrement = (id) => {
    dispatch ({type : "SET_INCREMENT", payload:id})
}

// remove Button
const removeItem = (id) => {
dispatch({type: "REMOVE_ITEM", payload:id})
}

// Clear Cart
const clearCart = () => {
    dispatch ({type: "CLEAR_CART" })
}

// add the data in localStorage

useEffect(() => {
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("PatelStore", JSON.stringify(state.cart));
},[state.cart]);


    return <CartContext.Provider
     value=
     {{...state,
      addToCart,
      removeItem,
      clearCart,
      setDecrement,
      setIncrement,
       }}>
        {children}
     </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}


export {CartProvider,useCartContext}