import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from  "react-router-dom";
import Home from "./Home";
import About from "./About"
import Contact from "../src/Contacts.jsx"
import SingleProduct from "./SingleProduct.jsx"
import Cart from "./Cart"
import {GlobalStyle} from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import Header from './components/Header';
import Nav from './components/Nav.jsx';
import Products from './Products.jsx';
import Footer from './components/Footer.jsx';
import ErrorPage from './ErrorPage.jsx';

//  Have to aavu ni thay ne thase kem ke css code direact copy past kairo che ok

const App = () => {

const theme = {
  colors: {
    
    heading: "rgb(24,24,29)",
    text: "#777",
    helper: "#8490ff",
    black: "#000",
    border: "rgba(98, 84, 243, 0.5)",
    btn: "#6254f3",
    white: "#fff",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
  
};


  return (
 
    
      <ThemeProvider theme ={theme}>

       <GlobalStyle/>
       {/* <Footer/> */}
       <Header/>  
       
       {/* <Nav/> */}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        
      </Routes>
      <Footer/>
      
          </ThemeProvider>
          
 
  )
}

export default App
