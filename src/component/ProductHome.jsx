import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context';
import product1 from "../img/products/product-1.jpg";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductHome = ( {products, addToCart}) => {
    console.log(products)
    const items = products.slice(0, 5)    
  
    return (
        <>
        <ProductWrapper>
        <ProductConsumer>
        {value => {
                      const { id, title, image, price, inCart} = products;
                    return (
           <div>

        {

                               items.map(product =>  <div className="product-display"  key={product.id} value={product.id}  >
                                 
                                 <div className='container' >
                                      <Link to='/details'> 
                    <div className='pr-text'>
                        <img src={product.image} alt=''/>
                        <h6 className='mt-4'>{product.title}</h6>
                        <p> UGX {product.price}</p>
                        

                        </div>
                        </Link>
                        <button  cart
                    disabled= {inCart ? true : false}
                    onClick={()=>{
                        value.addToCart(id);}}>
                             <i className='fa fa-plus mx-1'></i> 
                             {product.inCart ? 'inCart' : 'Add'
                        }</button>
                        </div>
                        
                        <br/>
                        <hr/>

                       
                                 
                                  </div>)
                            }
            
                    </div>
);
}}


</ProductConsumer>
                    </ProductWrapper>
        </>
    )
}

// ProductHome.propTypes = {
//     product:PropTypes.shape({
//         id:PropTypes.number,
//         img:PropTypes.string,
//         title:PropTypes.string,
//         price:PropTypes.number,
//         inCart:PropTypes.bool
//     }).isRequired
// }

const ProductWrapper = styled.div`
.product-display .pr-text {
    
    display:table;
 
}
.product-display .pr-text h6 {
    color: #252525;
	line-height: 16px;
	font-weight: 700;
    display:table;
 
}

 .product-display button {
     float:right;
    border-radius:4px;
    font-size:14px;
    font-weight:700;
    color:#2766cc;
    border-color:#2766cc;
   
}

.product-display img {
   border-radius: 25px;
   height:120px;
   float: left;
	margin-right: 20px;
}
.product h1{
    
    border-radius:4px;
    font-size:20px;
    font-weight:bold;
    margin-bottom:30px;

    
}
.product  span{
     background-color:#2766cc;
     border-radius:4px;
     font-size:15px;
     color:#fff;
     padding-left:5px;
     padding-right:3px;
}

`

export default ProductHome
