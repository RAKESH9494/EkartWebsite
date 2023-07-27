import React, { useEffect, useState } from 'react';
import firebaseDB from "./firebase"
import "./Styles.css"
const Cart = (props) => {
  const handler = (e) => {
    e.preventDefault();
    Object.entries(props.Products).forEach(([price_all, imageUrl_all], index) => {
      Object.entries(props.items).forEach(([price_selected, imageUrl_selected], index) => {
        if (imageUrl_all === imageUrl_selected) {
          firebaseDB.child(`Userproducts/${props.userid}`).push(
            {product:imageUrl_selected,price:price_selected}
          )
          firebaseDB.child(`All-items/${price_all}`).remove(
            err=>{
              if(err){
                console.log(err)
              }
            }
          );
        }
      });
    });
    alert("Payment Successful");
    props.setItem({});
    props.setTrigger(false);
    props.setTotalPayment(0);
  };
  return(props.trigger) ?( props.TotalPayment!==0 ?
  <div className="outer">
  <h3>MY CART</h3>
  <div className="inner">
    {props.items && Object.entries(props.items).map(([price, imageUrl], index) => (
      <div className="Productitem" key={index}>
        <div className="productbody">
          <center>
            <img src={imageUrl[1]} width="260px" height="250px" alt="Product" />
            <p>{imageUrl[0]}</p>
            <p>Price: {price}</p>
          </center>
        </div>
      </div>
    ))}
  </div><br/>
  <center><button onClick={handler} class="btn btn-dark">Pay {props.TotalPayment} </button></center><br/><br/>
  <center><button onClick={()=>props.setTrigger(false)} class="btn btn-danger">close</button></center>
</div>
  :<div><center><h2>CART IS EMPTY</h2><br/><button onClick={()=>props.setTrigger(false)} class="btn btn-danger">close</button></center></div>):"";
};
export default Cart;
