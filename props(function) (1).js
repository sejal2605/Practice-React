import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';

function App(){
  let [name, setName] = useState("Sejal")
  return(
    <div className="App">
    <h1>Props in Functional Component</h1>
    <h1>Student Component</h1>
    <Student name= {name}  Email = {"sejal.singh2605@gmail.com"}/>
    <button onClick={()=>{setName("Riya Singh")}}>Update Name</button>
    {/* <Student name= {"Ankita"}/> */}
    </div>
  );
  }

  export default App;

