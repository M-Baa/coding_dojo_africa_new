import  { useState } from "react";
import { useParams } from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";

const Show = ()=>{
    const [country,setCountry]=useState(null)
    const {name} = useParams()
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(res=> setCountry(res.data[0]))
        .catch(err=> console.log(err));
        
    },[name])
    return (
        <div>
            { country ? 
            <>
            <h1>
                {country.name.common}</h1>
                <img src={country.flags.png} alt="" height={100}/>
            <p>Capital:{country.capital}</p>
            <p>Population : {country.population}</p>
            
            </> 
            : <p>..loading</p>}
            
        </div>
    )
}



export default Show;