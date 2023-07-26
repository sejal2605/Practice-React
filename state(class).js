import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      data : "How are you"
    }
  }
  Apple(){
    this.setState({data: "What are you doing"})
    
  }
  render()
  {
    return(
      <div className="app">
        <h1>Hello Gyussss!!!</h1>
        <h2>{this.state.data}</h2>
        <button onClick={()=>this.Apple()}>Update Data</button>
      </div>
    );
  }
}

export default App;
