import './App.css';
import React from 'react'
class Students extends React.Component{
  componentWillUnmount()
  {
    // alert("componentWillUnmount")
    console.log("componentWillUnmount Called")
  }
  render(){
    return(
    <div className="App">Student Component <br /></div>
    )
  }
 };
class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      show:true
    }
  }
 render(){
    return (
      <div className="App">
        <h1>Component Will Unmount Life Cycle Method </h1>
          {
            this.state.show? <Students/>:<h1>Child Component removed</h1>
          }
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
        
      </div>
    )
  }
}
export default App