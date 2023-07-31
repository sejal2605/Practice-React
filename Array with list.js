import "./App.css";
import React from 'react'
import Table from 'react-bootstrap/Table';


function App(){
  // const SPAMS = ['Sejal','Prity','Ankita','Aayushi','Soumya']
  // using map function
  // SPAMS.map((items)=>{
  //   console.log("My Name is :" , {items})
  // })

  // using for loop
  // for (let i = 0; i<SPAMS.length; i++)
  // {
  //   console.log("My Name is " , SPAMS[i])
  // }
  // return(
    // <div className="App">
    // <h1>Handle Array with list---Map Function</h1>
    // {
    //   SPAMS.map((data)=>
    //   <h1>My Name is {data}</h1>)
    // }
   
    // </div>
  // )

  // if we want the details of SPAMS
  const SPAMS =[
    {name: "Sejal Singh",
    Age: 21,
    Email: "sejal.singh2605@gmail.com"},

    {name: "Soumyaprava Purohit",
    Age: 22,
    Email: "soumya123@gmail.com"},

    {name: "Ankita Sahoo",
    Age: 22,
    Email: "ankita123@gmail.com"},

    {name: "Prity Dubey",
    Age: 22,
    Email: "prity123@gmail.com"},

    {name: "Aayushi Sinha",
    Age: 23,
    Email: "aayushi123@gmail.com"}

  ]

  return (
    <div className="App">
      <h1>Handel Array with list</h1> <br /><br />
      <center>
      <Table striped="columns" border="4" >
        <tr>
          <td> NAME</td>
          <td >EMAIL ID</td>
          <td>AGE</td>
        </tr>
      {
      SPAMS.map((data) => 
          <tr>
            <td> {data.name} </td>
            <td>{data.Email}</td>
            <td> {data.Age}</td>
          </tr>
      )
      }
      
      </Table>
      </center>
    </div>
  )
}
export default App;

//In return statement for loop does not support, while map support in return statement
