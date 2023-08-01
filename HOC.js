import './App.css';
import React,{useState} from 'react'
function App(){
    return (
      <div className="App">
        <h1>Hight order Component</h1>
        <HOCRed cmp = {Counter}/>
        <HOCGreen cmp = {Counter}/>
        {/* <Counter/> */}
      </div>
    )
  }
  function HOCRed(props)
  {
    return(
      // <h2>Red Counter</h2>
      <h2 style ={{backgroundColor:'red',width:100}}>Red<props.cmp/></h2>
    )
  }
  function HOCGreen(props)
  {
    return(
      // <h2>Red Counter</h2>
      <h2 style ={{backgroundColor:'Green',width:100}}>Green<props.cmp/></h2>
    )
  }
function Counter()
{
  const[count,setCount] = useState(0)
  return(
  <div>
    {count} <br />
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
  )
}

export default App;


