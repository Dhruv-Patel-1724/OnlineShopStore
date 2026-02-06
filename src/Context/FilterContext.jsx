import { createContext, useContext, useEffect,useReducer } from "react";
import  {useProductContext} from "./ProductContacts";
// import reducer from "../Reducer/filterReducer"
import filterReducer from "../Reducer/filterReducer";


const FilterContext =  createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
    text:"",
    category: "all",
    company: "all",
    color: "all",
    maxPrice:1000,
    price:1000,
    minPrice:0,
    }
}


export const FilterContextProvider = ({children}) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

const setGrid_View = () =>{

return dispatch({type: "SET_GRID_VIEW"});

}

const setList_View = () => {
    return dispatch ({ type : 
        "SET_LIST_VIEW"})
    
    }

    // sorting function
    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE",
            payload:userValue,
        })
    };

    // update the filter values
    const updateFilterValue = (event) => {
let name = event.target.name;
let value = event.target.value;

return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
    }

// Clear Filter
const clearFilters=() =>{
    dispatch ({type: "CLEAR_FILTERS"})
}


    // to sort the products
    useEffect(() => {
  dispatch({ type: "FILTER_PRODUCTS" });
  dispatch({ type: "SORTING_PRODUCTS" });
}, [state.sorting_value, state.filters, products]);

    
    useEffect(()=> {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
    },[products])


return (
<FilterContext.Provider value = {{ ...state, setGrid_View, setList_View, sorting, clearFilters,updateFilterValue}}>
    {children}
</FilterContext.Provider>
)
};

export const useFilterContext = () =>{
    return useContext(FilterContext);
};
