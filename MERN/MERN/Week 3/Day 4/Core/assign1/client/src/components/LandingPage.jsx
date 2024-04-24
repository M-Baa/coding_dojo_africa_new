import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const LandingPage = () => {
    // movies state
    const [movies, setMovies] = useState([]);




    // GET ALL MOVIES FROM DATABASE
    useEffect(() => {
        axios.get("http://localhost:8000/api/movies")
            .then((allMovies) => setMovies(allMovies.data))
            .catch((err) => console.log(err));

    }, []);
    // DELETE THE CLICKED ON MOVIE FROM DATABASE
    const onDeleteMovie = (id) => {
        axios.delete(`http://localhost:8000/api/movies/${id}`)
            .then(res => {
                console.log(res)
                const filteredMovies = movies.filter((eachMovie) => {
                    return eachMovie._id != id;
                });
                setMovies(filteredMovies);
            })
            .catch(err => console.log(err))
    };
    return (
        <div>
            <Link to={"/movies/create"}>Create Movie</Link>

            {movies.map((oneMovie) => {
                return (
                    <div key={oneMovie._id}>
                        <Link to={`/movies/${oneMovie._id}`}>
                            <h2>{oneMovie.title}</h2>
                        </Link>
                        <img src={oneMovie.image} alt={oneMovie.title} width="150px" />
                        <p>{oneMovie.seen ? "seen" : "didnt see it yet"}</p>
                        <Link to={`/movies/${oneMovie._id}/update`}> update</Link>
                        <button onClick={() => { onDeleteMovie(oneMovie._id) }}>DELETE</button>
                    </div>
                );

            })}
        </div>

    );


};




export default LandingPage;