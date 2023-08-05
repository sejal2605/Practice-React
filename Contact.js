import { Link, Outlet } from "react-router-dom"
function Contact(){
    
    return(
        <div>
            <h1>Contact Us PAGE</h1>
             <h2>Here we have Some Other business</h2>
            <Link to="Company">Company</Link> <br/>
            <Link to="Channel">Channel</Link><br/>
            <Link to="Other">Other</Link><br/>
            <Outlet/>
        </div>
    )
}
export default Contact
