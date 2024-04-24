import React from "react";
import { useState, useNavigate } from "react";
import axios from 'axios';


const Create = () => {
    // inputs state
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
}
// USE NAVIGATE 
const navigate = useNavigate();
// SUBMIT HANDLER 
const SubmitHandler = (e) => {
    e.preventDefault();
    const createdProduct = {
        title,
        price,
        description,
    };
    axios.post("http://localhost:8000/api/products", createdProduct)
        .then((res) => {
            navigate("/");
        })
        .catch((err) =>
            console.log(err));

    setTitle("");
    setPrice("");
    setDescription("");
};

return (
    <div>
    <Link to={"/products"}>Product manager</Link>
        <form onSubmit={submitHandler} >
            <div>
                <label> Title</label>
                <input onChange={(e) => { setTitle(e.target.value) }} value={title} />
            </div>
            <div>
                <label>Image</label>
                <input onChange={(e) => { setPrice(e.target.value) }} value={price} />
            </div>
            <div>
                <label>Release Year </label>
                <input type="number" onChange={(e) => { setDescription(e.target.value) }} value={description} />
            </div>
    
            <button>submit </button>
        </form>
    </div>
);





export default Create;