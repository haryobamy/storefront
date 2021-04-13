import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/checkout/Checkout';
import Modal from './component/checkout/Modal';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from "./component/Navbar";
import ProductDetails from './component/ProductDetails';
import { detailProduct, storeProducts} from './data';

// products:[],
// detailProduct:detailProduct,
// cart:[],
// modalOpen:false,
// modalProduct:detailProduct,
// cartSubTotal:0,
// cartTax:0,
// cartTotal:0
 



const  App = () => {


  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [detailProduct, setDetailProduct] = useState({})
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)
  const [modalOpen, setModalOpen] = useState(true)



    const fetchproduct = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];

        });
        setProducts(tempProducts)
    }

    const getItem = id =>{
      const product = products.find(item => item.id === id);
      return product;
  }

 const  handleAddToCart = id =>{
   console.log('cart added')
 
    let tempProducts = [ ...products];
    const index =tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

setCart(() => {
return {products: tempProducts, cart: [...cart, product] };}, 
() =>{
   addTotals();
}
);}

 const handleDetail = id => {
  const product = this.getItem(id);
  setDetailProduct(()=>{
      return {detailProduct:product };
  });
};
    // const handleAddToCart = async (productId, quantity) => {
    //   const item = await commerce.cart.add(productId, quantity);
  
    //   setCart(item.cart);
    // };

    
const addTotals = () =>{
  let subTotal = 0;
  cart.map(item => (subTotal += item.total));
  const tempTax = subTotal * 0.05;
  const tax = parseFloat(tempTax.toFixed(2));
  const total = subTotal + tax 

  setCartSubTotal(subTotal)
  setCartTotal(total)
  setCartTax(tax)

}


const increment = id => {
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id === id);

  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count + 1;
  product.total = product.count * product.price;

  setCartTotal(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})

};

const decrement =(id) =>{
  let tempCart = [...cart];
  const selectedProduct = tempCart.find(item=>item.id === id);

  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

   product.count = product.count - 1;

   if (product.count === 0){
       this.removeItem(id)
   }
   else{
       product.total = product.count * product.price;
       setCartTotal(()=>{return{cart:[...tempCart]}},()=>{addTotals()})
   }

}
const removeItem = (id)=>{
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(item => item.id !== id);



  const index = tempProducts.indexOf(this.getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;

  this.setState(()=>{
      return{
          cart: [...tempCart],
          products:[...tempProducts]
      }
  },
  ()=>{
      this.addTotals();
  } );
  

}
const handleOpen = () =>{
  setModalOpen(true);
}

    useEffect(() => {
       fetchproduct();
    }, [])
    console.log(products)
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home  products={products} addToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/details">
            <ProductDetails  products={products} increment={increment} decrement={decrement}/>
          </Route>
          <Route exact path="/checkout">
            <Checkout modalOpen={modalOpen} handleOpen={handleOpen}  />
          </Route>
          </Switch>
      
      <Footer/>
      </Router>
      {/* <Modal modalOpen={modalOpen} /> */}
    </>
  );
}

export default App;
