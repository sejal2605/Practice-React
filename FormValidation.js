import logo from './logo.svg'
import './App.css';
import React from 'react';
import { useState } from 'react';

function App(){
    function Login(){
      const [user,setUser]=useState("");
          const [password,setPassword]=useState("");
          const [userErr,setUserErr]=useState(false);
          const [passErr,setPassErr]=useState(false);

      function loginhandle(e){
        // alert("Hello")
        if(user.length<3 || password.length<3)
        {
            alert("Type correct values")
        }
        else
        {
            alert("All Good")
        }

        e.preventDefault()
       }
      
      function userHandler(e){
        let item = e.target.value
        if(item.length<3)
        {
          setUserErr(true)
          // console.log("Invalid")
        }
        else{
          setUserErr(false)
        }
        // console.log(e.target.value.length)
        setUser(item)
      }
      function passwordhandler(e){
        let item=e.target.value;
        if(item.length<3 )
        {
           setPassErr(true)
        }
        else
        {
            setPassErr(false)
        }
        setPassword(item)

       }
      return(
        <div>
          <h1>LOGIN PAGE</h1>
          <form onSubmit={loginhandle}>
          <input type="text"placeholder='Enter Emailid' onChange={userHandler} />{userErr?<span>User not Valid</span>:""}
          <br/> <br />
          
          <input type="password"placeholder='Enter Password' onChange={passwordhandler} />{passErr?<span>Password not Valid</span>:""}
          <br/> <br />
          <button type='Submit'>Login</button>
          </form>
        </div>
      )
    }
    return(
          <div className="App">
            <h1>Conditional Rendering</h1>
            <Login/>
          </div>
        )
    }    
export default App;
