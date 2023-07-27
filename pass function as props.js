import logo from './logo.svg'
import './App.css';
import React from 'react';
import { useState } from 'react';

function App(){        
  function getData(){         
    alert("Hello from App")
    console.log("I am a parent Component")
  }
  function User(props){
    console.log("I am a  first Child Component")
    return(
      <div>
        <h1>User Component</h1>
        {/* <button onClick={()=>props.data()}>Call abc function</button> */}
        <button onClick={props.data}>Call data function</button>
      </div>
    )
  }
  function Members(props){
    console.log("I am a second Child Component")
    return(
      <div>
        <h1>Members Component</h1>
        {/* <button onClick={()=>props.data()}>Call abc function</button> */}
        <button onClick={props.data}>Call data function</button>
      </div>
    )
  }
    return(
          <div className="App">
            <h1>Pass Function as props</h1>
           <User data={getData}/>
           <div>
            <Members data={getData}/>
           </div>
          
          
          </div>
        )
    }    
export default App;
