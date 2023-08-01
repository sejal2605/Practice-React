import './App.css';
import React,{useRef} from 'react'
function App(){
  let inputRef = useRef(null)
  function handleinput(){
    console.log("function call")
    // inputRef.current.value="100"
    // inputRef.current.focus()
    // inputRef.current.style.color="Red"
    inputRef.current.style.display="none"
  }
    return (
      <div className="App">
        <h1>useRef in React </h1>
        <input type="text" ref={inputRef}  /> <br /><br />
        <button onClick={handleinput}>Handle Input</button>
      </div>
    );
  }


export default App;




