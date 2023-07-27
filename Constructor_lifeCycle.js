import logo from './logo.svg'
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      data:"Sejal"
    }
    // console.log("Here is Constructor")
  }
  render()
  {
    // console.log("Here is render")
    return(
      <h1>Hello {this.state.data}</h1>
    )
  }
}



export default App;
