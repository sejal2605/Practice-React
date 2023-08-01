import './App.css';
import React,{useState} from 'react'
function App(){
  let [val,setVal]=useState("0")
  // let [item,setitem]=useState("")
    return (
      <div className="App">
        <h1>Controlled Component</h1>
        <input type="text"  value={val}  onChange={(e)=>setVal(e.target.value)}/> <br /> <br />
        {/* <input type="text"  value={item} onChange={(e)=>setitem(e.target.value)}/>  */}
        <h3>Value {val}</h3>
        
      </div>
    );
  }


export default App;


