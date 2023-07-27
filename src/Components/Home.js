import React, { useEffect, useState} from 'react';
import firebaseDB from "./firebase"
import './Styles.css';
import Cart from './Cart';
import MyProducts from './Myproducts';
import { auth } from './firebase';
const Home = () => {
  const [product,setProduct] = useState({})
  const [ActiveUser,setActiveusername] = useState();
  const [ActiveUserId,setActiveUserId] = useState();
  useEffect(()=>{
    firebaseDB.child("All-items").on("value",deatils =>{
      deatils.val();
      setProduct(deatils.val());
    })
    const user = auth.currentUser;
    setActiveUserId(user.uid);
    setActiveusername(user.email)
  },[])
  const [items,setItems] = useState({});
  const [total,setTotal] = useState(0);
  const [pop,setPop] = useState(false);
  const [pop2,setPop2] = useState(false);
  const handleBuyClick = (price,imageUrl) => {
      setItems((prevCart) => ({
        ...prevCart,
      [price]: imageUrl,
    }));
    setTotal(parseInt(total)+parseInt(price));
  }
  return (
    <div>
      <div className="header">  
        <a href="#deftault" className="logo">Shopping Complex</a>
        <div className="header-right">
          <a onClick={()=>{auth.signOut(); window.location.reload()}}>Sign Out</a>
          <a onClick={()=>{setPop(true);setPop2(false)}}>Cart</a>
          <a onClick={()=>{setPop(false);setPop2(true)}}>MyProducts</a>
        </div>
      </div>
      <Cart userid={ActiveUserId} trigger={pop} setTrigger={setPop} cartItems={items} Products = {product} items ={items} setProducts={setProduct} setItem={setItems} TotalPayment ={total} setTotalPayment={setTotal}>

      </Cart>
      <MyProducts userid={ActiveUserId} trigger={pop2} setTrigger={setPop2} >
  
      </MyProducts>
      {pop === false && pop2 == false ?
      <div className="outer">
        <span><b>{ActiveUser}</b></span>
        <h3>LIVE PRODUCTS</h3>
        <div className="inner">
          {Object.entries(product).map(([price, imageUrl], index) => (
            <div className="Productitem" key={index}>
              <div className="productbody">
                <center>
                  <img src={imageUrl[1]} width="260px" height="250px" alt="Product"/>
                  <p>Name : {imageUrl[0]}</p>
                  <p>Price: {price}</p>
                  <button onClick={() => {handleBuyClick(price,imageUrl);alert("Added to Cart")}}  class="btn btn-dark">BUY</button>
                </center>
              </div>
            </div>
          ))}
        </div>
      </div> : ""}
    </div>
  );
};
export default (Home);

