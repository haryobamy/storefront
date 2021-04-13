import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import {storeProducts} from '../data';
import product1 from "../img/products/product-1.jpg";
import styled from "styled-components"
import { InputLabel,Modal, Button, Grid, Typography } from '@material-ui/core';
import { ProductConsumer } from '../context';

const ProductDetails = ({products, increment, decrement, id}) => {

    const [count, setCount] = useState(0)

    const handleIncreament = () =>{
        setCount(count + 1)
        
    }
    const handleDecreament = () =>{
        setCount(count - 1)
        
    }
    return (
        <>
        <DetailWrapper>
        <ProductConsumer>
        {value => {
                    const {id, category, image, description,price,title,inCart } = value.detailProduct;
                    return (
           <div>
        <div className='container'>
        <Link to='/'>
        <button style={{borderRadius:'25px', border:'none', fontWeight:'bold', fontSize:'22px'}}> <i className='fa fa-chevron-left mr-4' >
            </i>{category}</button>
        </Link>
        <hr/>
        <div className="row">
                    <div className="col-lg-4 col-md-2">
                        <img  className='mt-2' src={image} alt=''/>
                    </div>
                    <div className="col-lg-8 col-md-2">
                        <div className='details mt-4'>
                        <h2>{title}</h2>
                        <h5>{description}</h5>

                        <p>UGX <span>{price}</span> <br/> <span>  <strike>UGx <span>148,000</span></strike></span></p>

                                        <div className='buttons'>
                        <Button type="button" className='btn' style={{borderRight:'none', borderRadius:'5px 0 0 5px'}} size="small"  cart
                    disabled= {inCart ? true : false} onClick={handleDecreament}>-</Button>
                        <Typography style={{padding:'0 15px 0 15px', borderTop:'1px solid #2766cc', borderBottom:'1px solid #2766cc', fontSize:'16px', marginTop:'25px' }}>&nbsp;{count}&nbsp;</Typography>
                        <Button type="button" style={{borderLeft:'none', borderRadius:'0 5px 5px 0', }}  size="small" className='btn' onClick={handleIncreament} >+</Button>
                        </div>
                        
                        <div className='button'>
                        <button style={{border: '3px solid #2766cc', backgroundColor:'#fff',borderRadius:'10px',padding: '0 60px 0 60px',color:'#2766cc', fontWeight:'700'}} onClick={() =>{value.addToCart();}} >{inCart ? 'in Bag' : 'Add to Bag'}</button>
                        <Link to='/checkout'>
                        <button style={{border: '1px', backgroundColor:'#fefe33',borderRadius:'10px',padding: '10px 60px 10px 60px',color:'#2766cc', fontWeight:'700'}}>Buy Now</button>
                        </Link>
                        </div>
                    </div>
                    </div>
                    </div>

                    </div>

                    </div>
);
}}


</ProductConsumer>
                    </DetailWrapper>

        </>
            
    )
}

const DetailWrapper=styled.div`

.btn {
    background-color: #e3f2fd ;
    margin: 25px -5px 25px -5px;
    padding: 2px 2px;
    border: 1px solid #2766cc;
    border-radius: 5px;
   
    
    
    
    
    
}
.btn: onselect{
    outline:none; 
}

.buttons {
    display: flex;
    
    font-size: 18px;
    
    // padding: 500px -5px 500px -5px;
    // padding: 0 20px ;
    width:10%;
    
   
    text-color:#2766cc;
  }

.details strike {
    font-size:12px;
    color:gray;
    
    
}
.details p {
    font-size:22px;
    margin-top:20px;
    margin-bottom:25px;
    
    
}
.details h5 {
    font-size:14px;
    color:gray;
    margin-top:5px;
    
}
.details h2 {
    font-size:20px;
    font-weight:bold;
}

.container img {
    height:400px;
    width:350px;
    border-radius:15px;
}
.button {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin: 100px 250px 0 0px;
    text-color:#2766cc;
     

}
`
export default ProductDetails;
