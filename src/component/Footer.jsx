import React from 'react'
import styled from "styled-components";
import icon1 from "../img/icon-1.png";
import icon2 from "../img/icon-2.png";
import icon3 from "../img/icon-3.png";
const Footer = () => {
    return (
        <>
        <FooterWrapper>
           <div className="benefit-items">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-2">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={icon1} alt=""/>
                            </div>
                            <div className="sb-text">
                                
                                <p>Fast Delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={icon2} alt=""/>
                            </div>
                            <div className="sb-text">
                              
                                <p>Buyers Protections</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="single-benefit">
                            <div className="sb-icon">
                                <img src={icon3} alt=""/>
                            </div>
                            <div className="sb-text">
                                
                                <p>Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div> 
            <div className='store-details'>
                <h6>STORE DETAILS</h6>
                <h3>Target</h3>
                <p>Cham Towers, Plot 12 nkurma Rd , kampala, Ug </p>
                <button> <i className='fa fa-whatsapp'> </i> Chat With Us </button>
                
            </div>
            </FooterWrapper>
        </>
    )
}

const FooterWrapper = styled.div`


.store-details button{
    background-color:#25d366;
    color:#fff;
    border-radius:10px;
    border-color: #25d366;
   }
.store-details p{
    font-size:13px;
    color:gray;
    font-weight:500;
   }

.store-details h3{
    font-size:14px;
    font-weight:bold;
    margin-top: 20px;
   }

.store-details h6{
 font-size:12px;
}
.store-details {
    text-align: center;
    margin-bottom: 40px;
    margin-top: 40px;
}

.benefit-items {
	border:1px solid #2766cc;
	margin-top: 45px;
    background-color: #2766cc;
    
}

.benefit-items .single-benefit {
	padding-top: 30px;
	padding-bottom: 25px;
	padding-left: 40px;
	padding-right: 40px;
	
}

.benefit-items .single-benefit .sb-icon {
	
	 margin-left: 20px;
    
    

}

.benefit-items .single-benefit .sb-text {
	display: table;
    text-align:left;
}



.benefit-items .single-benefit .sb-text p {
	margin-bottom: 0;
	color: #fff;
	line-height: 20px;
    margin-top:10px;
    font-size:14px;
    
}

@media only screen and (max-width: 479px) {

.benefit-items .single-benefit {
    padding-left: 15px;
    padding-right: 15px;
}
}

`

export default Footer;
