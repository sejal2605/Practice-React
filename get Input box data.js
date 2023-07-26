import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(){
  const[data,setData] = useState(null)
  const[print,setPrint] = useState(false)
  function getData(val){
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  } 
   return(
    <div className="App">
      <h1>Get Input Box Value</h1>
      {
        print?
        <h2>{data}</h2>:null
      }
    
   
    <input type="text" onChange={getData} /><br/>
    <button onClick={()=>setPrint(true)}>Get Data</button>
   
    </div>
  );
  }

  export default App;

