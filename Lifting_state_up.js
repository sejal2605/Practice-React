// import React from 'react'
// import './App.css'
// import User from './user'
// function App(){
//   let data = "Sejal Singh"
//   return(
//   <div className="App">
//     <h1>Lifting state up</h1>
//     <User name ={data} />
//   </div>
//   )
// }
// export default App;

// send data child to parent component
import React from 'react'
import './App.css'
import User from './user'
function App(){
  function parentAlert(data)
  {
    // alert("Hellloooooo")
    alert(data)
  }
  return(
  <div className="App">
    <h1>Send Data Child to Parent Component</h1>
    <User alert = {parentAlert}/>
  </div>
  )
}
export default App;




// In user.js we use below code--------
function User(props){
  const data = "sejal Singh"
  return(
      <div>
          <h2>User Name :  </h2>
          <button onClick={()=>props.alert(data)}>CLICK ME</button>
      </div>
  )
}
export default User;