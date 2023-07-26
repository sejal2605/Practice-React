import './App.css';
import React, { useState } from 'react';

function App(){
  let[name,setName] = useState("")
  let [tnc,setTnc] = useState(false)
  let[interest,setInterest] = useState("")
    function getFormData(e)
    {
      console.log(name,tnc,interest)
      e.preventDefault()
    }
  return(
    <div className="App">
      <h1>Handle Form| check Box| Input Field| Select</h1>
       <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>React</option>
          <option>Angular</option>
        </select> <br /> <br />
          <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> <span>Accept Terms & Condition</span>
         <br /> <br />
         <button type="submit">SUBMIT</button>
         <button>CLEAR</button>

       </form>
        
      
    </div>
  )
}

export default App;
