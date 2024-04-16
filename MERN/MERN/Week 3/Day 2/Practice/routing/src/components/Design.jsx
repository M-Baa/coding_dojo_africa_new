import React from "react";
import { useParams } from "react-router-dom";

const Design =()=>{
    const {word} = useParams()
    console.log(word)
    return (
        <div>  
            <h1 style={{color:"blue", backgroundColor:"red"}} >  the word is : {word} </h1>
        </div>
    )



}
export default Design;