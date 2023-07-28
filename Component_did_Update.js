import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.log("constructor")
    this.state={count:0}
  }
  componentDidUpdate(preProps,preState,snapshot)
  {
    // console.log("componentDidUpdate",preState.count,this.state.count)
    console.log("componentDidUpdate",snapshot)
    // if(preState.count===this.state.count)
    // {
    //   alert("Data is already same")
    // }
    if (this.state.count<5)
    {
      this.setState({count:this.state.count+1})
    }
  }
  render()
  {
    // console.log("render")

    return (
      <div className="App">
        <h1>Component Did Update Life Cycle Method </h1>
          <h2>{this.state.count}</h2>
        <button onClick={()=>{this.setState({count: 1})}}>Update</button>
      </div>
    );
  }
}
export default App