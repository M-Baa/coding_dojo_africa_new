import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';


const People =()=>{
    const [result,setResult]=useState({})

    const nav = useNavigate()
    

    const {id} = useParams()
        console.log(id)
    const  {search} =useParams()



    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            }).catch((err) => {
                console.log(err)
                nav("/error")
            })
    }, [id])




    return ( 
        <div>
            {
                search == "people" ? <div> <h1>{result.name}</h1>
                <p>Height:{result.height}</p>     
                <p>Mass :{result.mass}</p>
                <p> Hair Color :{result.hair_color}</p>
                <p> Skin color : {result.skin_color}</p>
                    
                    
                        </div> : <div> 
                            <h1>{result.name}</h1>
                            <p>Climate :{result.climate}</p>
                            <p>Terrain : {result.terrain}</p>
                            <p> Surface : {result.surface_water}</p>
                            <p> Population : {result.population}</p>

                        </div>





            }




        </div>

    )
}


export default People;