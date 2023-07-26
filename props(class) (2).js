import React from "react";
class Student extends React.Component{
   
    render(){
        console.log(this.props)
        return(
            <>
            <div style={{backgroundColor:"brown"}}><h1>Student Details</h1></div>
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.Email}</h2>
            </div>
            </>
        )
    }
}
export default Student