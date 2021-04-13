import React from 'react';
import CartList from './cartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';
import EmptyCart from './EmptyCart';

const Carts = () => {


    // const renderEmptyCart = () => (
    //     <div className="bag">
    //                 <h1>Bag  <span>0</span></h1>
    //                 <i className='fa fa-frown-o ' style={{fontSize:'120px', color:'gray',justifyItems:'center'}}></i>
    //                 <h3>It's empty here</h3>
    //                 <p>start shopping to add item to your bag</p>
    //                 </div>
        
    //   );
    return (
        <>
    
<section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <>
                                    
                                        <CartList value ={value} />
                                        <CartTotals value = {value}  history={this.props.history}/>
                                </>
                            );
                        }
                        else{
                            return
                            <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
               
            </section>
           
      {/* { cart.length > 0 ? renderEmptyCart() : renderCart() } */}
    
        </>
    )
}

export default Carts;
