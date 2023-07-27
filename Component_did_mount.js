import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.log("constructor")
    this.state={name:"Sejal Singh"}
  }
  componentDidMount()
  {
    console.log("componentDidMount")

  }
  render()
  {
    console.log("render")

    return (
      <div className="App">
        <h1>Component Did Mount Life Cycle Method </h1>
          <h2>{this.state.name}</h2>
        <button onClick={()=>this.setState({name:"Sejal"})}>Update</button>
      </div>
    );
  }
}

export default App;
