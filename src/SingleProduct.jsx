import styled from "styled-components";
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./Context/ProductContacts";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import {Container} from './styles/Container';
import FormatPrice from "./Helper/FormatPrice";
import { TbTruckDelivery} from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API ="https://fakestoreapi.com/products"



const SingleProduct = () => {
  

  const{ isSingleLoading, getSingleProduct, singleProduct} = useProductContext();
  console.log(singleProduct.image);
  const {id: productId} = useParams();


  useEffect(() => {
    if(productId){
getSingleProduct(`${API}/${productId}`);

    }
  },[productId]);

  if (isSingleLoading) {
    return<div> Looading Product Please Wait</div>
  }
    if (!singleProduct) {
    return <div>No product found</div>;
  }
  
  const {
  id,
  company,
  price,
  description,
  category,
  title,
  image,
  stars,
  reviews,
} = singleProduct;

const stock = 8;

const productWithStock = {
  ...singleProduct,
  stock,
};


  return (
    <Wrapper>
    <PageNavigation title={title}/>
      <Container className="container">
        <div className="grid grid-two-column">
         <div className="product-images">
          <MyImage imgs={[{url: image}]}/>
        </div>

        <div className="product-data">
<h2>{title}</h2>
<Star stars={stars} reviews={reviews} />
<p>{price}</p>
<p>{description}</p>
<p className="product-data-price">
  MRP:
  <del>
    <FormatPrice price={price + 950}/>
  </del>
</p>
<p className="product-data-price product-data-real-price">
  Deal od the day: <FormatPrice price={price}/>
  </p>
{/* <p>{description}</p> */}


  <div className="product-data-warranty">
    <div className="product-warranty-data">   
       <TbTruckDelivery className="warranty-icon" />
    <p>Free Delivery</p>
  </div>

  <div className="product-warranty-data">
<TbReplace  className="warranty-icon" />
<p>30 Days Replacement</p>

  </div>

  <div className="product-warranty-data">
<MdSecurity  className="warranty-icon"/>
<p>2 Year Warranty</p>
  </div>

<div className="product-warranty-data">
   <TbTruckDelivery className="warranty-icon" />
    <p>Patel Delivery</p>
  </div>
   </div>

   <div className="product-data-info">
  <div className="color-stock">
      <p> Available:
<span> {stock > 0 ? "In stock" : "Not Available"} 
</span>
</p>
</div>
<hr/>
{stock > 0 && <AddToCart product={productWithStock} />}


<p>
  ID: <span> {title}</span>
</p>

<p>
  Catagory: <span> {category} </span>
</p>
   </div>
   

   {/* {stock > 0 && <AddToCart product={singleProduct} />} */}
</div>
</div>
  </Container>

</Wrapper>
  )

};


const Wrapper = styled.section`
  .product-container {
    padding: 9rem 0;
    max-width:1200px;
    margin:auto
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-warranty-data {
  padding: 1.2rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.product-warranty-data:hover {
  background: #f7f7f7;
}

.warranty-icon {
  font-size: 2.4rem;
  color: #555;
  transition: color 0.2s ease;
}

.product-warranty-data:hover .warranty-icon {
  color: #050508fa;
}


    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      // color:green;



      span {
        font-weight: bold;
        // color:green;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      //  height: 0.2rem; 
      border: 0.1rem solid #080808;
      color: red;
    }
  }
    .color-stock{
    span{
    color:green;
    }}

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;


export default SingleProduct
