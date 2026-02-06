import React, { useState } from 'react'
import styled from 'styled-components';
import CardAmount from './CardAmount';
import {Button} from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_context';


const AddToCart = ({product }) => {
  const {addToCart} = useCartContext();
  
    const {id, colors = [], stock}= product;

    const [amount, setAmount] = useState(1);

    const [selectedColor, setSelectedColor] = useState(colors[0] || "defult");

    const setDecrement = () => {
      amount > 1  ? setAmount (amount - 1) : setAmount(1);
    }

    const setIncrement = () => {
      amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

  return (
    <Wrapper>
        {/* <div className="colors">
            <p>
                Colors: 
                {colors.map((curColors, index) =>(
 <button
key={index}
style={{backgroundColor: curColors}}
className= "color-btn"/>
                ))}
            </p>
</div> */}

<CardAmount
amount = {amount}
setDecrease={() => setDecrement(id)}
setIncrease={() => setIncrement(id)}
/>

<NavLink to="/cart" 
onClick={() => addToCart (id, amount, colors, product)}>
<Button className="btn">Add To Cart</Button>
</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .color-btn{
    width:2rem;
    height:2rem;
    border-radius:50%;
    border:none;
    margin-left:0.5rem;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart
