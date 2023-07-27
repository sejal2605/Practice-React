import logo from './logo.svg'
import './App.css';
import React from 'react';
import { useState } from 'react';

// function App(){
//   function Profile()
//   {
//     let [loggedIn,setLoggedIn] = useState(true)
//   // when usestate is true then if condition print otherwise it will print else condition
//     if (loggedIn){
//       return(
//         <div>
//           <h2>Welcome Guest 1</h2>
//         </div>
//       )
//     }
//     else{
//       return(
//         <div>
//           <h1>Welcome Guest 2</h1>
//         </div>
//       )
//     }
   
//   }
//   return(
//     <div className="App">
//       <h1>Conditional Rendering</h1>
//       <Profile/>
//     </div>
//   )
// }


// export default App;



// Another way

// function App(){
//   function Profile(){
//     let [loggedIn,setLoggedIn] = useState(false)
//     return(
//       <div>
//        {loggedIn?<h1>welcome Guest 1</h1>:<h1>Welcome Guest 2</h1>}
//       </div>
//     )
//   }
//     return(
//           <div className="App">
//             <h1>Conditional Rendering</h1>
//             <Profile/>
//           </div>
//         )
//       }    
// export default App;

// if---elseif----else condition

function App(){
  function Profile(){
    let [loggedIn,setLoggedIn] = useState(2)
    return(
      <div>
       {loggedIn==1?<h1>welcome Guest 1</h1>:loggedIn==2?<h1>Welcome Guest 2</h1>:<h1>Welcom Guest 3</h1>}
      </div>
    )
  }
    return(
          <div className="App">
            <h1>Conditional Rendering</h1>
            <Profile/>
          </div>
        )
      }    
export default App;
