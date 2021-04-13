import React from 'react'

const EmptyCart = () => {
    return (
        <>
             <div className="bag">
                    <h1>Bag  <span>0</span></h1>
                    <i className='fa fa-frown-o ' style={{fontSize:'120px', color:'gray',justifyItems:'center'}}></i>
                    <h3>It's empty here</h3>
                    <p>start shopping to add item to your bag</p>
                    </div>
        </>
    )
}

export default EmptyCart
