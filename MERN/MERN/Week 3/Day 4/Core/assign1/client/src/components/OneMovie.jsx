import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
const OneMovie =()=>{

    const {id} = useParams();
    const [movie,setMovie]=useState({})
    useEffect(()=> {
        axios.get("http://localhost:8000/api/movies/"+id)
        .then(OneMovie=>setMovie(OneMovie.data))
        .catch((err)=>console.log(err));
    },[id]);

    // return  <div>{JSON.stringify(movie)}</div>
    // ken theb tchouf object 

    return <div>
        {movie ? ( 
            <>
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} width="250px"/>
            <p>release Year : {movie.releaseYear}</p>
            </>
        ) : ( "LOADING...."
        )}

    </div>

    


};




export default OneMovie;