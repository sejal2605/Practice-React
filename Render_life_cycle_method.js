import logo from './logo.svg'
import './App.css';
import React from 'react';


// -----props
// class User extends React.Component{
//   render()
//   {
//     console.log("render Method" ,this.props)
//     return(
//       <div>
//       <h1>User Component {this.props.name}</h1>
//       </div>
//     )
//   }
// }


// function App(){
//   let [name,setName] = React.useState("Sejal")
//   return(
//     <div className="App">
//       <h1>Render Life Cycle method In React</h1>
//       <User name={name}/>
//       <button onClick={()=>setName("Sejal Singh")}>Update Name</button>
//     </div>
//   )
// }

// ---state
class User extends React.Component {
  constructor() {
    super()
    this.state = { Email: "sejal.singh2605@gmail.com" }
  }
  render() {
    console.log("render Method", this.state.Email)
    return (
      <div>
        <h1>User Component</h1>
        <button onClick={() => this.setState({ Email: "SejalSingh@gmail.com" })}>Update Email id</button>
      </div>
    )
  }
}

function App() {
  let [name, setName] = React.useState("Sejal")
  return (
    <div className="App">
      <h1>Render Life Cycle method In React</h1>
      <User />

    </div>
  )
}

export default App;
