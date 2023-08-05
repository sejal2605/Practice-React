import { Link, NavLink } from "react-router-dom";
function NavBar(){
    return(
    <>
    <ul className="Navbar">
    {/* <li><Link to ="/">Home</Link></li>
    <li><Link to = "/About">About</Link></li>
    <li><Link to = "/Contact">Contact us</Link></li> */}
    <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? 'blue':'red'}}} 
    className="Nav-bar-link" to ="/">Home</NavLink></li>
    <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? 'blue':'red'}}} 
    className="Nav-bar-link" to = "/About">About</NavLink></li>
    <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? 'blue':'red'}}} 
    className="Nav-bar-link" to = "/Contact">Contact us</NavLink></li>
     <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? 'blue':'red'}}} 
    className="Nav-bar-link" to = "/Fillter">Filter</NavLink></li>
    <li><NavLink style={({isActive})=>{return{backgroundColor:isActive ? 'blue':'red'}}} 
    className="Nav-bar-link" to = "/login">Login</NavLink></li>
    
   
    </ul>
    </>
    )
}
export default NavBar