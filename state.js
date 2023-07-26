import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function App(){
//   let data = "Sejal Singh"
//   function updateData()
// {
//   data = "Riya Singh"
//   alert(data)
// }
// console.warn("_____")
// return(
//   <div className="app">
//     <h1>{data}</h1>
//     <button onClick = {updateData}>Updata Data</button>
//   </div>
// );
// }

// export default App;


function App(){
  const[data,setData] = useState(0)
  function updateData(){
    setData(data+1)
  }
  console.warn("____")
  return(
    <div className="app">
      <h1>{data}</h1>
      <button onClick={updateData}>Update data</button>
    </div>
  )
}

export default App;
