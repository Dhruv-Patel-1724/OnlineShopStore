const filterReducer = (state, action) => {

    switch(action.type) {
case "LOAD_FILTER_PRODUCTS":
return {
    ...state,
    filter_products:[...action.payload],
    all_products: [...action.payload,]
}
    
     

    case "SET_GRID_VIEW":
        return {
            ...state,
            grid_view:true,
        };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }

            case "GET_SORT_VALUE":
                // let userSortValue = document.getElementById("sort");
                // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

            return{
                
                ...state,
                sorting_value: action.payload,
            }

            case "SORTING_PRODUCTS":
                let newSortData;
                // let tempSortProduct = [...action.payload];

const {filter_products, sorting_value} = state;
let tempSortProduct = [...filter_products];


const sortingProducts = (a, b) => {
    if (sorting_value === "lowest"){
        return a.price - b.price;
    }

    if (sorting_value === "highest"){
        return b.price - a.price;
    }

    if (sorting_value === "a-z"){
        return a.title.localeCompare(b.title);
    }

    if (sorting_value === "z-a"){
       return b.title.localeCompare(a.title);
    }
}

newSortData = tempSortProduct.sort(sortingProducts);


// if(state.sorting_value === "lowest"){
//     const sortingProducts = (a,b) => {
//         return a.price - b.price;
//     };
// tempSortProduct = tempSortProduct.sort(sortingProducts);
// }

// if(state.sorting_value === "highest"){
//     const sortingProducts = (a,b) => {
//         return b.price - a.price;
//     };
// tempSortProduct = tempSortProduct.sort(sortingProducts);
// }

//       if(state.sorting_value === "a-z") {
//         tempSortProduct = tempSortProduct.sort((a,b) => 
//             a.title.localeCompare(b.title)
//         )
//       }

//        if(state.sorting_value === "z-a") {
//        tempSortProduct = tempSortProduct.sort((a,b) => 
//             b.title.localeCompare(a.title)
//         )
//       }
  return{
    ...state,
      filter_products: newSortData,   
  }

case "UPDATE_FILTERS_VALUE" :
          const { name, value}= action.payload;

  return{
                  ...state,
                  filters: {
                      ...state.filters,
                      [name]:value,
        
                }
          }

     case "FILTER_PRODUCTS" :
                 let {all_products} = state;
               let tempFilterProduct = [...all_products];
     const {text,category,price} = state.filters;
          if(text) {
            tempFilterProduct = tempFilterProduct.filter((curEle)=> {
              return (curEle.title || curEle.name|| "").toLowerCase().includes(text.toLowerCase());
          } );
        }
         
if (category !== "all") {
  tempFilterProduct = tempFilterProduct.filter(
    (curEle) => curEle.category === category
  );
}

if(price === 0){
    tempFilterProduct = tempFilterProduct.filter((curEle) => 
    curEle.price <= price);
}   else{
      tempFilterProduct = tempFilterProduct.filter((curEle) => 
    curEle.price <= price);
}


return {
                          ...state,
                          filter_products: tempFilterProduct,
                    };
                  
// if(color){
//      tempFilterProduct = tempFilterProduct.filter(
//     (curEle) => curEle.colors.includes(color) 
//      )

// }
                   
            case "CLEAR_FILTERS":
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                          text:"",
    category: "all",
    company: "all",
    color: "all",
    maxPrice:1000,
    price: 0,
    minPrice:700,

                    }
                }
  
           default:
            return state;
    }
}


export default filterReducer;
