import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import logo1 from "../../public/images/patel.png";

const MainHeader = styled.header`
padding:0 4.8rem;
height: 10rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position:relative;
left:0
top:0
width:100%
z-index:999;



.logo {
height: 25px;
}`;

const Header = () => {
  const logo = {
    width: "22rem",
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <MainHeader>
      <NavLink to="/">
        <img style={logo} src={logo1} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

export default Header;
