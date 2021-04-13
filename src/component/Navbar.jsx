import React from 'react';
import styled from "styled-components";

const Navbar = () => {
    return (
        <>
        <NavWrapper>
        <header className="header-section">
            <div className="header-top">
            <div className="container">
                <div className="ht-left">
                    
                    <div className="store-service">
                        <i className=" fa fa-shopping-cart"></i>
                        Store made with soko
                    </div>
                </div>
                
            </div>
        </div>

        <div className="container my-3">
            <div className="inner-header">
                <div className="row">
                    <div className="col-lg-6 col-md-2">
                        <div className='ht-down'>
                            <i className='fa fa-home mx-3' style={{fontSize:'50px', color:'gray'}}></i>
                            <p className='1' ><strong style={{fontSize:'25px'}}>Target</strong>
                            
                            <br/>
                             <span style={{color:'grey', fontWeight:'400', fontFamily:'arial'}}>
                            Cham Towers, plot 12 nkurma Rd , kampala, Ug 
                            </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-7">
                       
                    </div>
                   
                    <div className="col-lg-3 text-right col-md-3">
                        <ul className="nav-right">
                            <button  className='mx-3' style={{borderRadius:'45px', border:'none'}}>
                            <li className="cart-icon">
                            <a href="#">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>4</span>
                                </a>
                                <div className="cart-hover">
                                    <div className="select-items">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="si-pic">
                                                        <img src="img/select-product-1.jpg" alt=""/>
                                                        </td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="si-pic">
                                                        <img src="img/select-product-2.jpg" alt=""/>
                                                        </td>
                                                    <td className="si-text">
                                                        <div className="product-selected">
                                                            <p>$60.00 x 1</p>
                                                            <h6>Kabino Bedside Table</h6>
                                                        </div>
                                                    </td>
                                                    <td className="si-close">
                                                        <i className="ti-close"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="select-total">
                                        <span>total:</span>
                                        <h5>$120.00</h5>
                                    </div>
                                    <div className="select-button">
                                        <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                        <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>
                                </div>
                            </li>
                            <li></li>
                            <li className="cart-bag">Bag</li>
                               
                            </button>
                               

                            
                                <button style={{borderRadius:'45px', border:'none'}}>
                                <li className="heart-icon">
                                <a href="#">
                                    <i className="fa fa-user "> Account </i>
                                    
                                </a>
                                </li>
                                </button>
                                
                            
                        </ul>
                        
                    </div>
                    
                </div>
             
            </div>
           
        </div>
        
        
        </header>
        </NavWrapper>
        </>
    )
}

const NavWrapper = styled.div`
@media only screen and (min-width: 1200px) {
	.container {
		max-width: 1170px;
	}
}

.inner-header .nav-right {
	padding: 10px 0;
}



.inner-header .nav-right li {
	list-style: none;
	display: inline-block;
	font-size: 20px;
	margin-left: 15px;
}

.inner-header .nav-right li.heart-icon a {
	color: #252525;
	position: relative;
	display: inline-block;
}

.inner-header .nav-right li.heart-icon a span {
	position: absolute;
	right: -8px;
	top: -1px;
	height: 15px;
	width: 15px;
	background: #e7ab3c;
	color: #ffffff;
	border-radius: 50%;
	font-size: 11px;
	font-weight: 700;
	text-align: center;
	line-height: 15px;
}

.inner-header .nav-right li.cart-icon {
	position: relative;
}

.inner-header .nav-right li.cart-icon:hover .cart-hover {
	opacity: 1;
	visibility: visible;
	top: 60px;
}

.inner-header .nav-right li.cart-icon a {
	color: #252525;
	position: relative;
	display: inline-block;
}

.inner-header .nav-right li.cart-icon a span {
	position: absolute;
	right: -8px;
	top: -1px;
	height: 15px;
	width: 15px;
	background: red;
	color: #ffffff;
	border-radius: 50%;
	font-size: 11px;
	font-weight: 700;
	text-align: center;
	line-height: 15px;
}

.inner-header .nav-right li.cart-icon .cart-hover {
	position: absolute;
	right: -70px;
	top: 100px;
	width: 350px;
	background: #ffffff;
	z-index: 99;
	text-align: left;
	padding: 30px;
	opacity: 0;
	visibility: hidden;
	-webkit-box-shadow: 0 13px 32px rgba(51, 51, 51, 0.1);
	box-shadow: 0 13px 32px rgba(51, 51, 51, 0.1);
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table {
	width: 100%;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td {
	padding-bottom: 20px;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td.si-pic img {
	border: 1px solid #ebebeb;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td.si-text {
	padding-left: 18px;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td.si-text .product-selected p {
	color: #e7ab3c;
	line-height: 30px;
	margin-bottom: 7px;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td.si-text .product-selected h6 {
	color: #232530;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-items table tr td.si-close {
	color: #252525;
	font-size: 16px;
	cursor: pointer;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-total {
	overflow: hidden;
	border-top: 1px solid #e5e5e5;
	padding-top: 26px;
	margin-bottom: 30px;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-total span {
	font-size: 14px;
	color: #e7ab3c;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	float: left;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-total h5 {
	color: #e7ab3c;
	float: right;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-button .view-card {
	font-size: 12px;
	letter-spacing: 2px;
	display: block;
	text-align: center;
	background: #191919;
	color: #ffffff;
	padding: 15px 30px 12px;
	margin-bottom: 10px;
}

.inner-header .nav-right li.cart-icon .cart-hover .select-button .checkout-btn {
	font-size: 12px;
	letter-spacing: 2px;
	display: block;
	text-align: center;
	color: #ffffff;
	padding: 15px 30px 12px;
}

.inner-header .nav-right li.cart-bag {
	font-size: 15px;
	font-weight: 700;
	color: #252525;
}
.header-top {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	border-bottom: 1px solid #e5e5e5;
    background-color: #2766cc;
}
.ht-down {
    display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	border-bottom: 1px solid #FFF;
}

.header-top .ht-left {
	float: left;
    
}





.header-top .ht-left .store-service {
	float: right;
	font-size: 14px;
	color: #fff;
	line-height: 27px;
	padding-top: 15px;
	padding-bottom: 12px;
	padding-left: 70px;
}

.header-top .ht-left .store-service i {
	margin-right: 5px;
}







`

export default Navbar;
