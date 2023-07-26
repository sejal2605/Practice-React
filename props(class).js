import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './student';

class App extends React.Component{
  constructor(){
    super()
    this.state={name:"Sejal"}
  }
  render(){
  return(
    <div className="App">
    <h1>Props in class Component</h1>
    <h2><b>Student Component</b></h2>
    <Student name = {this.state.name}  Email = {"sejal.singh2605@gmail.com"} />
    <button onClick={()=>this.setState({name:"Sejal Singh"})}>Update Name</button>
    {/* <Student name= {"Ankita"} Email = {"ankita@gmail.com"}/> */}
    </div>
  );
  }
  }

  export default App;

