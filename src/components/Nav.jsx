import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgClose, CgMenu } from "react-icons/cg";
// import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from "../Context/Cart_context";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../styles/Button";

const Nav = () => {
  
const {total_item} = useCartContext();
       console.log("NAV TOTAL:", total_item);



   const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect, // Starts the login flow
    logout, // Starts the logout flow
    user, // User profile
  } = useAuth0();

  // const signup = () =>
  //   login({ authorizationParams: { screen_hint: "signup" } });

  // const logout = () =>
  //   auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return "Loading...";


  return (

    
    <Header>
      <NavBar>

     <ul>

          <li>
            <NavLink to="/" className="navbar-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="navbar-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className="navbar-link">
              Products
            </NavLink>
          </li>

           <li>
             <NavLink to="/contacts" className="navbar-link">
               Contact
             </NavLink>
         </li>
           <li>
             <NavLink to="/cart" className="navbar-link cart-trolley---link">
       <FiShoppingCart className="cart-trolley "/>
       <span className="cart-total--item">{total_item}</span>
             </NavLink>
           </li>
           {
            isAuthenticated && <p> {user.name}</p>
           }

  {isAuthenticated ? (
  <li> 
    <Button 
    onClick={()=> logout ({ returnTo: window.location.origin })}>
      Log Out
    </Button>
    </li>
  ) : (
    <li>
      <Button onClick={() => loginWithRedirect()} > Log In</Button>
      </li>
  )}

 
         </ul>
         <div className="mobile-navbar-btn">
           <CgMenu name= "menu-outline" className="mobile-nav-icon"/>
          <CgClose name= "close-outline" className="mobile-nav-icon close-outline" />

           </div>
       </NavBar>
    
  
     </Header>
     
  );
};


const Header = styled.header`
  padding: 1.5rem 4rem;
  height: 10rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.nav`
  ul {
    display: flex;
    gap: 3rem;
    list-style: none;
  }
    .auth-wrapper {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: 1.6rem;
}

.user-info {
  font-size: 1.48rem;
  color: #374151;
  font-weight: 500;
  white-space: nowrap;
}

.user-info strong {
  color: #111827;
  font-weight: 600;
}
  .auth-wrapper img {
  flex-shrink: 0;
}

.logout-button,
.signup-button,
.login-button {
  padding: 0.65rem 1.5rem;
  font-size: 1.38rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.logout-button {
  background: #ef4444;
  color: white;
}

.logout-button:hover {
  background: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}
    .auth-wrapper {
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin-left: 1.8rem;          /* cart se perfect distance */
}

.user-info {
  font-size: 1.5rem;
  color: #1f2937;
  font-weight: 500;
  padding: 0.45rem 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  white-space: nowrap;
}

.user-info strong {
  color: #0f172a;
  font-weight: 600;
}

/* Buttons - common base */
.logout-button,
.signup-button,
.login-button {
  padding: 0.7rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.22s ease;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.logout-button,
.signup-button,
.login-button:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.14);
}

/* Specific colors + hover */
.logout-button {
  background: #f87171;
  color: white;
}

.logout-button:hover {
  background: #ef4444;
}

.signup-button {
  background: linear-gradient(to right, #6366f1, #a78bfa);
  color: white;
}

.signup-button:hover {
  background: linear-gradient(to right, #4f46e5, #8b5cf6);
}

.login-button {
  background: white;
  color: #6366f1;
  border: 2px solid #6366f1;
}

.login-button:hover {
  background: #6366f1;
  color: white;
}

/* Mobile friendly */
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .auth-wrapper {
    flex-direction: column;
    gap: 1.5rem;
    margin: 2.5rem 0 1.5rem 0;
    width: 100%;
    text-align: center;
  }

  .user-info {
    font-size: 2rem;
    padding: 0.7rem 1.4rem;
  }

  .logout-button,
  .signup-button,
  .login-button {
    width: 80%;
    max-width: 260px;
    padding: 1.1rem 1.8rem;
    font-size: 1.7rem;
    border-radius: 10px;
  }
}


.signup-button {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
}

.signup-button:hover {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

.login-button {
  background: white;
  color: #4f46e5;
  border: 2px solid #6366f1;
}

.login-button:hover {
  background: #4f46e5;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

/* Mobile */
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .auth-wrapper {
    flex-direction: column;
    gap: 1.3rem;
    margin: 2.2rem 0 1.2rem 0;
    width: 100%;
    text-align: center;
  }

  .user-info {
    font-size: 1.9rem;
  }

  .logout-button,
  .signup-button,
  .login-button {
    width: 82%;
    max-width: 240px;
    padding: 1rem 1.6rem;
    font-size: 1.65rem;
  }
}

  .navbar-lists {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  visibility: hidden;
  opacity:0;
  transform: translateX(100%);
  
  transition: all 0.3s linear;

}

.active .navbar-lists {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
  z-index: 999;
  transform-origin: right;
  transition: all 3s linear;
 

}


  .navbar-link {
    text-decoration: none;
    font-size: 1.8rem;
    color: #000;
    font-weight: 500;
  }

  .cart-trolley---link{
  position: relative; 
  
  .cart-trolley{
  position: relative;
  font-size: 3.2rem;
  }

  .cart-total--item{
  width: 2.2rem;
  height: 2.2rem;
  position: absolute;
  // background-color:#000;
  color:#fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  top: -8px;
  right: -10px;
  font-size:1.2rem;
  background-color:${({ theme}) => theme.colors.helper};
}
};


  .navbar-link.active {
    color: #6254f3;
  }

.mobile-navbar-btn{
display:none;
background-color: transparent;
cursor: pointer;
border: none;
}

.mobile-nav-icon[ name ="close-outline"] {
display:none;
}

.close-outline {
display:none;
}


@media (max-width: ${({ theme}) => theme.media.mobile}){
.mobile-navbar-btn{
display:none;
z-index:9999;
border: ${({ theme }) => theme.colors.black};

.mobile-nav-icon {
font-size: 4.2rem;
display: flex;
color: ${({ theme}) => theme.colors.black};
}
}

.active .mobile-nav-icon {
  display: none;
  font-size: 4.2rem;
  position: absolute;
  top: 30%;
  right: 10%;
  color: ${({ theme }) => theme.colors.black};
  z-index: 9999;
  
}

.active .close-outline {
display: inline-block;
}

    *{
  margin:0;
  padding:0;
  }
`;


export default Nav;



















