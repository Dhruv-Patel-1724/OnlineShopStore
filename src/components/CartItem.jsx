import React from 'react'
import FormatPrice from '../Helper/FormatPrice'
import CardAmount from './CardAmount'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../Context/Cart_context';

const CartItem = ({id, color, amount, image, price,name}) => {
const {removeItem,  setIncrement,  setDecrement} = useCartContext();

    // const setDecrement = () => {
    //   amount > 1  ? setAmount (amount - 1) : setAmount(1);
    // }

    // const setIncrement = () => {
    //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
    // }


    return  <div className="cart-heading grid grid-five-column">
<div className="cart-image--name">
    <div>
        <figure>
    <img src={image} alt={id} />
</figure>
</div>
<div>
    <p>{name}</p>
    <div className = "color-div">
        <p>color:</p>
        
        <div className="color-style"  style={{ backgroundColor: color, color: color}}>
           
        </div>
    </div>
</div>
</div>

{/* Price */}
<div className="cart-hide">
    <p>
        <FormatPrice price={price} />
        </p>
</div>

{/* Quantity */}
<CardAmount
amount = {amount}
setDecrease={() => setDecrement(id)}
setIncrease={() =>setIncrement(id)}
/>   

{/* SubTotale */}
<div
className="cart-hide">
    <p>
        <FormatPrice price={price * amount} />
    </p>
</div>

<div>
    <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
</div>
 </div>
}

export default CartItem
