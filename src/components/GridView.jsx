import React from 'react'
import styled from 'styled-components'
import Product from '../components/Product'
// import FeatureProduct from './FeatureProduct'

const GridView = ({products}) => {
  return (
  <div>
       {/* <FeatureProduct/> */}
  
     <Wrapper className="section">
        <div className="container grid grid-three-column">
            {
                products.map((curElem) => {
                    return <Product key={curElem.id} {...curElem}/>
                })
            }
       
</div>
    </Wrapper>
     </div>
  )
}

const Wrapper = styled.section`
 padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .caption {
  position: absolute;
  top: 0.8rem;
  // left: 0.8rem;
  background-color: rgb(247, 245, 245);
  color: #4e4c5dff;
  padding: 0.15rem 0.45rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.6rem;
  letter-spacing:0.04rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  text-transform:uppercase;
  white-space:nowrap;
  display:inline-flex;
  align-items:center;
}


  /* ✅ INTRO TEXT */
  .intro-data {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.helper};
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 0.1rem;
  }

  /* ✅ MAIN HEADING */
  .common-heading {
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 6rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  .product-link {
  text-decoration: none;
  color: inherit;
}


  /* ✅ GRID FIX */
  .grid {
    display: grid;
    gap: 4rem;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }

  /* ✅ LOADING FIX */
  .loading {
    font-size: 3rem;
    text-align: center;
    padding: 5rem 0;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    img {
      max-width: 90%;
      height: 20rem;
      object-fit: contain;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.15);
    }

    .caption {
      position: absolute;
      top: 10%;
      right: 10%;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.6rem 1.6rem;
      font-size: 1.1rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1.2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);

    .card-data {
      padding: 2rem;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }

    .card-data--price {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
      font-weight: 600;
    }
  }
`;

export default GridView
