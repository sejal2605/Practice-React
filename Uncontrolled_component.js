import './App.css';
import React,{useRef} from 'react'
function App(){
  let inputRef1=useRef(null)
  let inputRef2=useRef(null)
  function submitForm(e)
  {
     e.preventDefault()
     console.log("Input Field value 1 : ",inputRef1.current.value)
     console.log("Input Field value 2 : ",inputRef2.current.value)
     let input3 = document.getElementById('input3').value
     console.log("Input Field Value 3 : ",input3)
  }
    return (
      <div className="App">
        <h1>UnControlled Component</h1>
        <form onSubmit={submitForm}>
        <input ref={inputRef1} type="text"/> <br /> <br />
        <input  ref={inputRef2} type="text"/>  <br /> <br />
        <input id='input3' type='text' /> <br /> <br />
        <button>Submit</button>
        </form>
      </div>
    );
  }


export default App;


