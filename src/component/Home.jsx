import React from 'react'
import styled from "styled-components";
import product1 from "../img/products/product-1.jpg";
import ProductHome from './ProductHome';
import ProductList from './ProductDetails';
import Carts from './cart/Carts';
import {ProductConsumer} from '../context';

const Home = ({products, addToCart}) => {

    console.log(products)
    return (
        <>
        <HomeWrapper>

        <ProductConsumer>
        {value => {
                    const {id, category, image, description,price,title,inCart } = value.detailProduct;
                    return (
           <div>
            
        <div className="inner-header">
            <div className="advanced-search"> <hr/>
                        <div className="input-group">
                            
                                <input type="text" placeholder="What do you need?" />
                                <button type="button"><i className="fa fa-search"></i></button>
                                
                            </div>
                            </div>
                            </div>
                            
           <section className="product py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="filter-widget">
                        <h4 className="fw-title"></h4>
                        <ul className="filter-catagories">
                            <li><a href="#">Electronics <i>(12)</i></a></li>
                            <li><a href="#">face mask  <i>(12)</i></a></li>
                            <li><a href="#">Fresh Food  <i>(12)</i></a></li>
                            <li><a href="#">Grocerys  <i>(12)</i></a></li>
                            <li><a href="#">Home  <i>(12)</i></a></li>
                            <li><a href="#">Kids  <i>(12)</i></a></li>
                        </ul>
                    </div>
                    <div className="filter-widget">
                        <h4 className="fw-title">View catagories</h4>
                        <div className="fw-brand-check">
                           
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-7">
                    <div className='products'>
                <h1>Electronics   <span>12</span></h1>

              <ProductHome products={products} addToCart={addToCart}/>
              <button type='button' onClick={() =>{}} style={{fontSize:'18px',borderRadius:'4px',fontWeight:'700',margin:'0 250px',color:'#2766cc',borderColor:'#2766cc'}}> <i className='fa fa-spinner fa-spin '></i> more....</button>
              
                    </div>

                </div>
                <div className="col-lg-3">
                <h1>Bag  <span>0</span></h1>
                    <Carts/>

                </div>
            </div>
        </div>
    </section> 
</div>
);
}}


</ProductConsumer>
    </HomeWrapper>
        </>
    )
}

const HomeWrapper = styled.div`
input:focus{
    outline:none; 
}


.bag p{
    text-align: center;
    color:gray
}

.bag h3{
    font-size:15px;
    font-weight:bold;
    text-align: center;
}


.product .products{
    border-right: 1px solid  gray;  
}
.product .filter-widget{

    border-right: 1px solid gray;
}
// .products .product-display  .sale {
//     color: #ffffff;
// 	font-size: 10px;
// 	background: #76BC42;
// 	  position: absolute;
// 	right: 0;
// 	 bottom: 20px;
// 	 padding: 5px 10px;
// 	text-transform: uppercase;
}
// .product-display .pr-text h6 {
//     color: #252525;
// 	line-height: 15px;
// 	font-weight: 700;
//     display:inline-block;
    
    
   
// }
//  .product-display button {
//     float:right;
//     border-radius:4px;
//     font-size:14px;
//     font-weight:700;
//     color:#2766cc;
//     border-color:#2766cc;
   
// }

// .product-display img {
//    border-radius: 25px;
//    height:120px;
//    float: left;
// 	margin-right: 20px;
// }
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
.inner-header .advanced-search .input-group {
	max-width: 70%;
	height: 100%;
    float:right;
}


.inner-header .advanced-search .input-group input {
	width: 60%;
	height: 100%;
	border:none;
    border-radius: 15px 0 0 15px ;
	font-size: 16px;
	color:gray ;
    background-color:#d1d1d1;
	padding-left: 20px;
    padding-top:6px;
    padding-bottom:6px;
    
    
}

 .inner-header .advanced-search .input-group button {
    
 	font-size: 12px;
	color: #ffffff;
// 	position: absolute;
     right: -3px;
 	top: -1px;
 	border: 1px solid yellow;
    border-radius:0 15px 15px 0;
 	background: yellow;
 	
     padding-top:7px;
     padding-bottom:7px;
 	cursor: pointer;
 }

`

export default Home;
