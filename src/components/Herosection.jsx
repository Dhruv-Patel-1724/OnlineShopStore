import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const Herosection = ({myData}) => {
 
const {name} = myData
  


  
  return  <Wrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to </p>
          <h1>{name}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima             
            commodi laudantium ipsa qui! Iusto, praesentium est incidunt sequi placeat sedv
            illum reiciendis nam provident quae iste tempore ex delectus rerum expedita
            quidem numquam rem dolore? Quae repudiandae at veniam sapiente deserunt atque, 
            laborum sit?
         </p>
         <NavLink>
          <Button>Shop</Button>
         </NavLink>
        </div>

        <div className="hero-section-image">
       <figure>
        <img src="../../public/images/hero.jpg" 
        alt="hero-section-photo" 
        className = "img-style" />

       </figure>
        
        </div>
      </div>

    </div>
  </Wrapper>

}


const Wrapper = styled.section`
padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }


h1 {
  text-transform: capitalize;
  font-weight: bold;
}


.intro-data {
margin-bottom: 0;
}
}

.img-style {
width:100%;
height: auto;
 
}

.hero-section-data{
p{
margin: 2rem 0;
}
}

.container{
h1{
font-size:50px;
}}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }
}

figure {
  position: relative;
}

figure img {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
}

figure::after {
  content: "";
  width: 60%;
  height: 80%;
  background-color: rgba(81, 56, 238, 0.4);
  position: absolute;
  top: -5rem;
  right: -5rem;
  z-index: 0;
}
.hero-section-image{

  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center
}
`;

export default Herosection