function Student(props){
    console.log(props)
    return(
        <div style={{backgroundColor: "aquamarine"}}>
            <h2>Hii {props.name}</h2>
            <h2>Email : {props.Email}</h2>
        </div>
    )
}
export default Student