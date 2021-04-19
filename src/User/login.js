import React, {useRef} from 'react';
import '../User/style.css';
import axios from 'axios';
import {useHistory } from "react-router-dom";

const User = (props) => {
  const firstName = useRef(null)
  const lastName = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const loginEmail = useRef("")
  const loginPassword = useRef("")
  const history = useHistory();

const add = (tfirstName,tlastName,temail,tpassword) =>{
  let sdata ={
      firstName : tfirstName,
      lastName : tlastName,
      email : temail,
      password : tpassword,
      time : Date.now()
  }
  console.log(sdata)
  axios.post('http://localhost:9000/user/',sdata).then(res =>{  

        firstName.current.value = ""
        lastName.current.value = ""
        email.current.value = ""
        password.current.value = ""
        var button = document.getElementById("btn");
        button.click(); 

    
  })
  
}
const login = (temail,tpassword ) => {
  let sdata ={
    email : temail,
    password : tpassword
  }
  console.log(sdata)
  axios.post('http://localhost:9000/users/',sdata).then(res => {
    props.settoken(res.data.token)
    history.push('/student')
  })

}


        return (<> 
        <div className = "back-color">     
  <div className="login-wrap">
  <div className="login-html">
    <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label for="tab-1" className="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Sign Up</label>
    <div className="login-form">
      <div className="sign-in-htm">
        <div className="group">
        <label for="user" className="label"></label>
          <input id="username" name="username" type="text" className="input" ref={loginEmail} placeholder = "enter your email here " required/>
        </div>
        <div className="group">
        <label for="user" className="label"></label>
          <input id="password" name="password" type="password" className="input" data-type="password" ref={loginPassword} placeholder = "enter your password here " required/>
        </div>
        <div className="group">
          <input id="check" type="checkbox" className="check" defaultChecked/>
          <label for="check"><span className="icon"></span> Keep me Signed in</label>
        </div>
        <div className="group">
        <input type="submit" className="button" name="login" onClick = {() => login(loginEmail.current.value,loginPassword.current.value)} value="Sign In"/>
        </div>
        <p id ="change" style={{color:'red'}}></p>
        <div className="hr"></div>
        
      </div>
      <div className="sign-up-htm">
        <div className="group">
          <label for="user" className="label"></label>
          <input id="First Name" name="First Name" type="text" className="input" ref={firstName} placeholder = "enter your first name "  required/>
        </div>
        <div className="group">
          <label for="user" className="label"></label>
          <input id="Last Name" name="Last Name" type="text" className="input" ref={lastName} placeholder = "enter your last name " required/>
        </div>
        <div className="group">
          <label for="user" className="label"></label>
          <input id="Email" name="Email" type="email" className="input" ref={email} placeholder = "enter your email "  required/>
        </div>
        <div className="group">
          <label for="pass" className="label"></label>
          <input name="password" type="password" className="input" data-type="password" ref={password} placeholder = "enter your password " required/>
        </div>
        
        <div className="group">
          <input type="submit" name="signup" className="button" onClick = {() => add(firstName.current.value,lastName.current.value,email.current.value,password.current.value)} value="Sign Up"/>
          <p id ="change1" style={{color:'red'}}></p>
        </div>
        <div className="hr"></div>
        <div className="foot-lnk">
          <label id ='btn' htmlFor="tab-1">Already Member?</label>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</>)
}
export default User