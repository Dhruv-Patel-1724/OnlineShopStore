import AddToCart from "../components/AddToCart"

// const cartReducer = (state, action) => {

//     if(action.type === "ADD_TO_CART") {
//         let { id, color, amount, product} = action.payload;

        
//     let cartProduct;

//     cartProduct = {
//         id: uniqueId,
//         name: product.title || product.name || "no name",
//         color,
//         amount,
//         image: product.image[0].url || "",
//         price:product.price,
//         max:product.stock || 10,
//     }
//     return{
//         ...state,
//         cart:[...state.cart, cartProduct],
//     }
//   return state;
// }
//     }


// //     let cartProduct;

// //     cartProduct = {
// //         id: uniqueId,
// //         name: product.title || product.name || "no name",
// //         color,
// //         amount,
// //         image: product.image[0].url || "",
// //         price:product.price,
// //         max:product.stock || 10,
// //     }
// //     return{
// //         ...state,
// //         cart:[...state.cart, cartProduct],
// //     }
// //   return state;
// // }

// export default cartReducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, color, amount, product } = action.payload || {};

      if (!id || !product) {
        console.warn("ADD_TO_CART: id ya product missing hai", action.payload);
        return state;
      }

      const uniqueId = `${id}-${color || 'default'}`;

      const existingItem = state.cart.find((item) => item.id === uniqueId);

      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === uniqueId) {
            let newAmount = item.amount + amount;

            if (newAmount > item.max) {
              newAmount = item.max;
            }

        return {
          ...item,
          amount: newAmount,
        };
      }
      
      return item;})

      return {
        ...state,
        cart: updatedCart,
      }
      } else {

      const cartProduct = {
        id: uniqueId,
        name: product.title || product.name || "No Name",
        color: color || "default",
        amount: Number(amount) || 1,           // string na aaye
        image: product.image,
        price: product.price || 0,
        max: product.stock,
      };

      // 6. cart add 
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
    }

    // Set the increment nd Decrement project folde kiya che kevu project

    case "SET_DECREMENT": {
  const updatedCart = state.cart.map((curElem) => {
    if (curElem.id === action.payload) {
      let decAmount = curElem.amount - 1;
      if (decAmount < 1) decAmount = 1;

      return {
        ...curElem,
        amount: decAmount,
      };
    }
    return curElem;
  });

  return {
    ...state,
    cart: updatedCart,
  };
}

// Increment 

    case "SET_INCREMENT": {
  const updatedCart = state.cart.map((curElem) => {
    if (curElem.id === action.payload) {
      let incAmount = curElem.amount + 1;
      if (incAmount > curElem.max) incAmount = curElem.max;

      return {
        ...curElem,
        amount: incAmount,
      };
    }
    return curElem;
  });

  return {
    ...state,
    cart: updatedCart,
  };
}



    case "REMOVE_ITEM":
  return {
    ...state,
    cart: state.cart.filter(item => item.id !== action.payload),
  };

// to empty or clear cart

  case  "CLEAR_CART" :
return {
  ...state,
  cart: [],
}

// Total Cart

// case "CART_TOTAL_ITEM": {
//       const totalItems = state.cart.reduce(
//         (total, item) => total + item.amount,
//         0
//       );
//       return { ...state, total_item: totalItems };
//     }

// // Cart Total Price

// case "CART_TOTAL_PRICE": {

//   const total_price = state.cart.reduce((total, item) => {
//     return total + item.price * item.amount;
//   }, 0);

//   return {
//     ...state,
//     total_price,
//   };
// }



case "CART_ITEM_PRICE_TOTAL": {
  const { total_item, total_price } = state.cart.reduce((accum, curElem) => {
      accum.total_item += curElem.amount;
      accum.total_price += curElem.price * curElem.amount;
      return accum;
    },
    { total_item: 0, total_price: 0 }
  );

  return {
    ...state,
    total_item,
    total_price,
  };
}


    default:
      return state;
  }
};

export default cartReducer;