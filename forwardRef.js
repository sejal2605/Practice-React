import './App.css';
import React,{useRef} from 'react'
import User from './user';
function App(){
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000"
    inputRef.current.style.color="Red"
    inputRef.current.focus()
  }
    return (
      <div className="App">
        <h1>forwardRef in React </h1>
        <User ref ={inputRef}/> <br /> 
        <button onClick={updateInput}> Update Inpute Box</button>
      </div>
    );
  }


export default App;



// user.js---------
import React , { forwardRef } from 'react';

function User(props,ref){
    return(
      <div>
        <input type="text" ref={ref} />
      </div>
    )
  }

  export default forwardRef(User)