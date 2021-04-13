import React from 'react';
import CartItem from './CartItem';

const cartList = ({value}) => {

    const {cart} = value
    return (
        <div>
             <div className='container-fluid'>
            {cart.map( item =>{
                return <CartItem  key= {item.id} item={item} value={value}/>
            })}
            
        </div>
        </div>
    )
}

export default cartList
