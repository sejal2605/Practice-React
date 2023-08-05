import { Link, useNavigate, useLocation } from "react-router-dom"
function Home(){
    const location = useLocation()
    console.log(location)
    let navigate = useNavigate()
    let navToPage=(url)=>{
                navigate(url)
    //     let x=false;
    //     if(x){
    //         navigate('/about')
    //     }
    //     else{
    //         navigate('/Fillter')
    //     }
    }
    return(
        <>
        <h1>Home Page</h1>
        <p>This is Home Page</p>
        <p>We are learning react Router here</p>
        <Link to = "/About">Go to About Page</Link>
        <br/>
        <br/>
        {/* <button onClick={()=>navigate('/about')}>Go to About Page</button> */}
        {/* <button onClick={()=>navToPage()}>Go to About Page</button> */}
        <button onClick={()=>navToPage('/about')}>Go to About Page</button>
        <br/>
        <br/>
        {/* <button onClick={()=>navigate('/Fillter')}>Go to Filter Page</button> */}
        {/* <button onClick={()=>navToPage()}>Go to Filter Page</button> */}
        <button onClick={()=>navToPage('/Fillter')}>Go to Filter Page</button>
        </>
    )
}
export default Home