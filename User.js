import { useParams, useLocation } from "react-router-dom"
function User(){
    const location = useLocation()
    console.log(location)
    let params = useParams()
    let {name} = params
    console.warn(name)
    return(
        <div>
            <h1>This is {name}'s Page</h1>
        </div>
    )
}
export default User