import React from 'react'
import { useCartContext } from './Context/Cart_context';
import styled from 'styled-components';
import CartItem from './components/CartItem';
import { NavLink } from 'react-router-dom';
import { Button } from './styles/Button';
import FormatPrice from './Helper/FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';

 const Cart =() => {
  const {cart, clearCart, total_price,shipping_fee} =useCartContext();
  console.log("CART DATA", cart)

  const {isAuthenticated, user} = useAuth0();


  if(!cart || cart.length === 0) {
    return (
      <EmptyDiv>
      <h3>No Cart In Item</h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        {isAuthenticated && (
          <div className="cart-user--profile">
            <img src={user.profile} alt={user.name} />
            <h2 className="cart-user--name">{user.name}</h2>
            </div>
        )}
        <div className="cart-heading grid grid-five-column">
      <p>items</p>
      <p className="cart-hide">
        Price
      </p>
<p>Quantity</p>
<p className='cart-hide'>Subtotal</p>
<p>Remove</p>
        </div>
        <hr />

<div className="cart-item">
  {
    cart.map((curElem) => {
      return <CartItem key={curElem.id} {...curElem} />
    })
  }
</div>
<hr/>
<div className="cart-two-button">
  <NavLink to="/products">
  <Button>Continue Shopping</Button>
  </NavLink>
  <Button className='btn btn-clear' onClick={clearCart}>Clear Cart</Button>
</div>

<div className="order-total--amount">
  <div className="order-total--subdata">
    <div>
      <p>SubTotal:</p>
      <p><FormatPrice price={total_price}/>
      </p>
    </div>
    <div>
      <p>
        shipping_fee:
      </p>
      <p>
        <FormatPrice price={shipping_fee}/>
      </p>
    </div>
    <hr/>
    <div>
      <p>order total:</p>
      <p>
        <FormatPrice price={shipping_fee + total_price}/>
      </p>
    </div>
  </div>
</div>

      </div>

    </Wrapper>
  )
}

const EmptyDiv = styled.div`
display: grid;
place-items: center;
height: 50vh;

h3 {
font-size: 4:2;
text-transform:capitalize;
font-weight:300;
}

.empty-icon {
  svg {
    width: 140px;
    height: 140px;
    color: ${({ theme }) => theme.colors.btn};
    opacity: 0.8;
  }
}
`;

const Wrapper = styled.section`

  padding: 6rem 0;
  background: linear-gradient(180deg, #f8f9ff, #ffffff);

  .container {
    background: #ffffff;
    padding: 3.5rem;
    border-radius: 1.6rem;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.06);
  }

  /* ================= CART HEADING ================= */
  .cart-heading {
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #eee;
    padding-bottom: 1.4rem;

    p {
      font-size: 1.3rem;
      font-weight: 600;
      color: #777;
    }
  }

  .grid-five-column {
    display: grid;
    grid-template-columns: 2.5fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 2.5rem 0;
  }

  /* ================= CART ITEMS ================= */
  .cart-item {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .cart-user--profile {
  display: flex;
  align-items: center;
  gap: 1rem;               /* photo aur name ke beech space */
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.cart-user--name {
  font-size: 1.5rem;
  margin: 0;
  color: #333;
}

  .cart-item > div {
    background: #fafafa;
    padding: 2rem;
    border-radius: 1.2rem;
    transition: all 0.25s ease;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
  }

  .cart-item > div:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
  }

  /* ================= IMAGE + NAME ================= */
  .cart-image--name {
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 1.6rem;
    align-items: center;
    text-align: left;

    img {
      width: 85px;
      height: 85px;
      object-fit: contain;
      border-radius: 0.8rem;
      background: #ffffff;
      padding: 0.8rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
      color: #222;
      margin-bottom: 0.4rem;
    }

    .color-div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        font-size: 1.2rem;
        color: #666;
      }

      .color-style {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: 1px solid #ccc;
      }
    }
  }

  /* ================= PRICE ================= */
  .cart-hide {
    font-weight: 600;
    color: #333;
  }

  /* ================= AMOUNT ================= */
  .amount-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: none;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      font-size: 1.6rem;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: ${({ theme }) => theme.colors.btn};
        color: #fff;
      }
    }

    .amount-style {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  /* ================= SUBTOTAL ================= */
  .cart-subtotal {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.btn};
  }

  /* ================= REMOVE ================= */
  .remove_icon {
    font-size: 2rem;
    color: #ff4d4f;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.25);
    }
  }

  /* ================= BUTTONS ================= */
  .cart-two-button {
    margin-top: 3.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    a {
      text-decoration: none;
    }

    button {
      min-width: 220px;
      padding: 1.2rem 2.6rem;
      border-radius: 0.8rem;
      font-weight: 600;
      font-size: 1.4rem;
    }

    .btn-clear {
      background: linear-gradient(135deg, #ff4d4f, #ff7875);

      &:hover {
        background: linear-gradient(135deg, #ff7875, #ff4d4f);
      }
    }
  }

  /* ================= TOTAL BOX ================= */
  .order-total--amount {
    margin-top: 4rem;
    display: flex;
    justify-content: flex-end;

    .order-total--subdata {
      width: 380px;
      background: linear-gradient(135deg, #ffffff, #f6f7ff);
      border-radius: 1.6rem;
      padding: 3rem;
      box-shadow: 0 12px 30px rgba(0,0,0,0.08);

      div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.4rem;

        p {
          font-size: 1.5rem;
          font-weight: 500;
          color: #333;
        }
      }

      hr {
        margin: 2rem 0;
      }

      div:last-child p:last-child {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  /* ================= MOBILE ================= */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 3rem 0;

    .grid-five-column {
      grid-template-columns: 1.6fr 1fr 0.8fr;
    }

    .cart-hide {
      display: none;
    }

    .cart-two-button {
      flex-direction: column;

      button {
        width: 100%;
      }
    }

    .order-total--amount {
      justify-content: center;
    }
  }
`;


export default Cart;

