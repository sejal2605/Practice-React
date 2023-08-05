import { useSearchParams } from "react-router-dom";

function Fillter(){
    let [searchParams,setSearchParams] = useSearchParams()
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age =searchParams.get('age')
    const city =searchParams.get('city')
    return(
        <div>
            <h1>FILTER PAGE</h1>
            <h3>Age is : {age}</h3>
            <h3>City is : {city} </h3>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:10})} placeholder="Set text in Query Params"/>
            <button onClick={()=>setSearchParams({age:40})}>Set Age in Query Params</button>
        </div>
    )
}
export default Fillter