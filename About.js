import { Link } from "react-router-dom"

function About(){
    return(
        <>
        <h1>About Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora adipisci. Consequatur neque eum saepe, in, magni ut quisquam distinctio ipsam debitis architecto beatae modi ipsa sint consectetur culpa cupiditate.</p>
        <Link to = "/">Go to Home Page</Link>
        <li><Link to = "/User/sejal" state={{name:"Sejal Singh"}}>Sejal</Link></li>
    <li><Link to = "/User/riya">Riya</Link></li>
        </>
    )
}
export default About