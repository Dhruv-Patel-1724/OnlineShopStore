import { NavLink } from "react-router-dom"
import FormatPrice from "../Helper/FormatPrice"

const Product = ({id, image, title, price, category}) => {
    // const {id, image, title, price, category} = curElem
  return (
   <NavLink to= {`/singleproduct/${id}`}>
<div className="card">
    <figure>
        <img src= {image} alt={title}/>
        <figcaption className="caption">{category}</figcaption>
    </figure>
    <div className="cart-data">
        <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">{<FormatPrice price= {price}/>}</p>
        </div>
    </div>
</div>
   </NavLink>
  )
}

export default Product;
