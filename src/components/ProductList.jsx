import React from 'react'
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';
// import FeatureProduct from './FeatureProduct';


const ProductList = () => {
  const {filter_products, grid_view} = useFilterContext();

if (filter_products.length === 0) {
    return <h3>Loading...</h3>;
  }


  if(grid_view === true ){
    return <GridView products={filter_products}/>
  }


  
  if(grid_view === false){
    return <ListView products={filter_products}/>
  }

  //  if(setGridview === false){
  //   return <ListView product={filter_products}/>
  // }
  
}



export default ProductList
