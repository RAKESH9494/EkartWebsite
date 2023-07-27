import React, { useState,useEffect } from "react";
import firebaseDB from "./firebase";
const Myproducts = (props) => {
    const[products,setProduct]=useState({

    })
    useEffect(()=>{
        firebaseDB.child("Userproducts").on("value",deatils =>{
          deatils.val();
          setProduct(deatils.val())
        })
        console.log(products)
      },[])

    return(props.trigger) ?(
        <div className="outer">
        <h3>MY PRODUCTS</h3>
        <div className="inner">
        {products && Object.entries(products).map(([user,i], index) => (
            user == props.userid ?
            Object.entries(i).map((p, index)=>(
                <div className="Productitem" key={index}>
                <div className="productbody">
                  <center>
                    <img src={p[1].product[1]} width="260px" height="250px" alt="Product" />
                    <p>{p[1].product[0]}</p>
                    <p>Price: {p[1].price}</p>
                  </center>
                </div>
              </div>
                
                // console.log(p[1].product[0],p[1].product[1],p[1].price)
                
        ))
          :""))}
        </div><br/>
        <center><button onClick={()=>props.setTrigger(false)} class="btn btn-danger">close</button></center>
      </div>):""
      }

export default Myproducts;