// import './App.css'
// import React from 'react'
// function App(){
//   return(
//     <React.Fragment>
//       <h1>REACT FRAGMENT</h1>
//       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus.</h3>
//     </React.Fragment>
//   )
// }

// export default App;


// import './App.css'
// import React,{Fragment} from 'react'
// function App(){
//   return(
//     <Fragment>
//       <h1>REACT FRAGMENT</h1>
//       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus.</h3>
//     </Fragment>
//   )
// }

// export default App;

// import './App.css'
// import React from 'react'
// function App(){
//   return(
//     <>
//       <h1>REACT FRAGMENT</h1>
//       <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus.</h3>
//     </>
//   )
// }

// export default App;



import './App.css'
import React from 'react'
function App(){
  function Calls()
  {
    return(
      <>
      <td>Sejal</td>
      <td>Singh</td>
      </>
    )
  }
  return(
    <div>
      <h1>REACT FRAGMENT</h1>
      <h2>Heloooo</h2>
      <table>
        <tbody>
          <tr>
            <Calls/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;

