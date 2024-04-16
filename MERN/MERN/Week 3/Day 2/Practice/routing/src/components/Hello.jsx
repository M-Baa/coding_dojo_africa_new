import React from "react";
import { useParams } from "react-router-dom";

const Hello =()=>{
    const {word} = useParams()
    console.log(word)
    return (
        <div>  
            <h1>the word is : {word}</h1>
        </div>
    )



}
export default Hello;