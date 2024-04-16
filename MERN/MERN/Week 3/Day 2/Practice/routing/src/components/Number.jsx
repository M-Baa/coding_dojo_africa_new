import React from "react";
import { useParams } from "react-router-dom";

const Number =()=>{
    const {id} = useParams()
    console.log(id)
    return (
        <div>  
            <h1>this is number is : {id}</h1>
        </div>
    )



}
export default Number;