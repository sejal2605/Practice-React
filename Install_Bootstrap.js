import "./App.css";
import React from 'react'
import {Button}  from 'react-bootstrap';
import { Alert } from "react-bootstrap";

function App(){
  return(
    <div className="App">
    <h1>Install Bootrap</h1>
    <br></br>
    <Button onClick={()=>alert("Hellooooo")} variant="success">CLICK ME</Button><br /><br />
    <Alert  variant="primary">
          Successfully Installed Bootstrap
        </Alert>
        
    </div>
  )
}
export default App;

// first we can install bootstrap using this command ----- npm install react-bootstrap bootstrap
// Then import css in index.js ------ import 'bootstrap/dist/css/bootstrap.min.css';