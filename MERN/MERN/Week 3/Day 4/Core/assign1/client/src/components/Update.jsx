import React, { useEffect } from "react";
import {useParams} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Update =()=>{
    // grab the movie id from the url 
    const {id} = useParams();
    // use navigate
    const navigate = useNavigate();
    
      // inputs state
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [releaseYear, setReleaseYear] = useState("")
    const [seen, setSeen] = useState(false);

    // GRAB THE SELECTED MOVIE FROM DATABASE
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then((res)=> {
        setTitle(res.data.title);
        setImage(res.data.image);
        setReleaseYear(res.data.releaseYear);
        setSeen(res.data.seen);
        })
        .catch((err)=> console.log(err));
        },[id]);


// SAVE THE UPDATED MOVIE TO THE DATABASE
const submitHandler = (e) => {
    e.preventDefault();
    const updatedMovie = {
        title,
        image,
        releaseYear,
        seen,
    };
    axios.patch("http://localhost:8000/api/movies", updatedMovie)
        .then((res) => {
            navigate("/");

        })




    
    return (
        <div>
        <form onSubmit={submitHandler} >
            <div>
                <label> Title</label>
                <input onChange={(e) => { setTitle(e.target.value) }} value={title} />
            </div>
            <div>
                <label>Image</label>
                <input onChange={(e) => { setImage(e.target.value) }} value={image} />
            </div>
            <div>
                <label>Release Year </label>
                <input type="number" onChange={(e) => { setReleaseYear(e.target.value) }} value={releaseYear} />
            </div>
            <div>
                <label> Seen</label>
                <input type="checkbox" onChange={(e) => { setSeen(e.target.checked) }} value={seen} />
            </div>
            <button>submit </button>
        </form>
    </div>
);
    };



}

export default  Update;