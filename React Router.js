import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/Nav';
// import Page404 from './component/Page404';
import User from './component/User';
import Fillter from './component/Fillter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from './component/login';
import Protected from './component/protectedroute';

function App(){
      return(
        <div className="App">
          <h1>React Router 6</h1>
          <BrowserRouter>
          <NavBar/>
          <Routes>
          {/* <Route path = "/" element ={<Home/>} /> */}
          <Route path = "/" element ={<Protected Component={Home}/>} />
          <Route path = "/login" element ={<Login/>} />
          <Route path = "/About" element ={<Protected Component={Home}/>} />
          <Route path = "/User/:name" element ={<Protected Component={Home}/>} />
          {/* <Route path = "/*" element = {<Page404/>} /> */}
          <Route path ="/*" element ={<Navigate to = "/"/>} />  
          <Route path = "/Fillter" element ={<Protected Component={Home}/>} />
          <Route path = "/Contact/" element ={<Protected Component={Home}/>} >
          <Route path="Company" element={<Company/>} />
          <Route path="Channel" element={<Channel/>} />
          <Route path="Other" element={<Other/>} />
          </Route>
          </Routes>
          </BrowserRouter>
        </div>
      )  
}
export default App


