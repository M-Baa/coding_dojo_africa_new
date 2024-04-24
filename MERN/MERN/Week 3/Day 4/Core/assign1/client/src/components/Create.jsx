import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate , Link } from "react-router-dom";


const Create = () => {
    // inputs state
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [releaseYear, setReleaseYear] = useState("")
    const [seen, setSeen] = useState(false);
    // USE NAVIGATE
    const navigate = useNavigate();
    // SUBMIT HANDLER
    const submitHandler = (e) => {
        e.preventDefault();
        const createdMovie = {
            title,
            image,
            releaseYear,
            seen,
        };
        axios.post("http://localhost:8000/api/movies", createdMovie)
            .then((res) => {
                navigate("/");

            })

            .catch((err) => console.log(err));
        setTitle("");
        setImage("");
        setReleaseYear("");
        setSeen("");
    };

    return (
        <div>
        <Link to={"/movies"}>Home</Link>
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




export default Create;