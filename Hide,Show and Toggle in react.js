import './App.css';
import React from 'react';

function App(){
  let [status,setStatus] = React.useState(false)
  return(
    <div className="App">
      <h1>Hide, Show and Toggle in ReactJs</h1>
      {
        status? <h2>Hello World !</h2>:null
      }
      
      {/* <button onClick={()=>setStatus(false)}>HIDE</button>
      <button onClick={()=>setStatus(true)}>SHOW</button> */}

      <button onClick={()=>setStatus(!status)}>TOGGLE</button>   
      
    </div>
  )
}

export default App;
