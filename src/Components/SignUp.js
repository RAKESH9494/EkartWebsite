

import React, { useEffect, useState } from 'react'
import "../App.css"
import {auth} from "./firebase"
const SignUp = () =>{
    const handler =async(e) =>{
        e.preventDefault();
        const user = document.querySelector("#gmail").value;
        const password = document.querySelector("#password").value;
        auth.createUserWithEmailAndPassword(user,password).then(res=>{alert("Signup Succcess");window.location.reload()}).catch(err=>{
            console.log(err);
            alert("faild to signUp")
        })

    }
return (
    <div>
        <center>
            <div class="signUpbox">
              <h2>SIGN UP</h2>
              <form class="form-group" onSubmit={handler}>
                <label>GMAIL</label>
                <input type="text" class="form-control" id="gmail"/>
                <label>PASSWORD</label>
                <input type="password" class="form-control" id="password"/><br/>
                <input type="submit"  class="btn btn-secondary"/>&nbsp;
               </form>
               <button class="btn btn-secondary" onClick={()=>window.location.reload()}>CLOSE</button>&nbsp;
           </div>
        </center>
    </div>
)}
 export default SignUp