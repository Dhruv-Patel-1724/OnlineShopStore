import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';

const MyImage = ({imgs =[ {url : " " }]}) => {

  const [mainImage, setMainImage] = useState(imgs[0]);

useEffect(() => {
    setMainImage(imgs[0]);
  }, [imgs]);

  if (!imgs.length) {
    return <p>No images available</p>;
  }

  // if(!Array.isArray(imgs) || imgs.length === 0){
  //   return <p>
  //     No images available
  //   </p>
  // }
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {
imgs.map((curElm, index) => {
  return(
  <figure key={index}>
    <img
    src={curElm.url}
    alt={curElm.filename} className="box-image---style"
    onClick={() => setMainImage(curElm)}
     />
  </figure>
)})}
      </div>

<div className="mainn-screen">
  <img src={mainImage.url} alt={mainImage.filename} />
</div>
    </Wrapper>
  )
}

// const Wrapper = styled.section`
// display:grid;
// grid-template-columns:0.4fr 1fr;
// gap: 1rem;

// .grid {
// flex-direction:row;
// display: flex; 
// justify-items:center;
// align-items:center;
// width:100%;
// gap:1rem;
// }

// img {
// max-width:100%;
// mex-height:100%;
// background-size:cover;
//     object-fit: contain;
// }

// `


const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 2rem;

  .grid {
    display: grid;
    gap: 1rem;
  }

  .grid-four-column {
    grid-template-columns: repeat(1, 1fr);
  }

  figure {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }

  .box-image---style {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  .mainn-screen {
    width: 100%;
    max-width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mainn-screen img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;



export default MyImage
