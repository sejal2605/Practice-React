import { Link } from "react-router-dom"
function Page404(){
    return(
        <div>
            <h1>404 Page Not found</h1>
            <p>This URL is not found</p>
            <Link to = '/'>Go to Home Page</Link>
        </div>
    )
}
export default Page404