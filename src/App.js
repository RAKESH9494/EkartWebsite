import React, { useState } from "react";
import { auth } from "./Components/firebase";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";

const App = () => {
  const [sing,setsign] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handler = async (e) => {
    e.preventDefault();
    const user = document.querySelector("#user").value;
    const pw = document.querySelector("#pw").value;
    auth.signInWithEmailAndPassword(user, pw).then((res) => {
      setIsLoggedIn(true);
      alert("Login Success");
    }).catch((err) => {
      console.log(err);
      alert("Incorrect details");
    });
  };

  if (isLoggedIn) {
    return <Home />;
  } else {
    return(sing == true?
      <div class="lgbody">
        <center>
        <div class="lgbox">
            <h2>LOGIN</h2>
            <form class="form-group" onSubmit={handler}>
                <label>User Name</label><br/>
                <input type="text" class="form-control" id="user" /><br/>
                <label>Password</label><br/>
                <input type="password" class="form-control" id="pw"/><br/>
                <input type="Submit" class="btn btn-secondary" value={"Login"}/>
            </form>
            <p>Dont have Account?? <a onClick={()=>setsign(false)} class="btn btn-secondary">click here</a></p>
        </div>
        </center>
    </div>:<SignUp/>
    );
  }
};

export default App;