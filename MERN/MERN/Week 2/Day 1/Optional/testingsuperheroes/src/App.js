import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';

import axios from "axios";
function App() {

const[Heroes,setHeroes]=useState([])

useEffect(() => {
  axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
  .then((res)=>{
    console.log(res.data)
    setHeroes(res.data)
  }).catch((err)=> {
    console.log("this is a error",err)
  })
},[])



const FetchHeroes =()=>{
  fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
  .then(response => {
    return response.json()

  }).then((JsonResponse)=>{
    console.log(JsonResponse)
    setHeroes(JsonResponse)

  })
  .catch(err=> {
    console.log(err);
  })
  
}

// fetching data with axios
const  axiosHeroes =()=>{
  axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
  .then((res)=>{
    console.log(res.data)
    setHeroes(res.data)
  }).catch((err)=>{
    console.log("this is an error ",err)
  })
}


return (
  <div className='App'>
    <h1> super Heroes Api</h1>
    <p></p>
  <button onClick={FetchHeroes}>fetch superheroes</button>
  <button onClick={axiosHeroes}> axios superheroes</button>
  <hr/>
<table>
<thead>
  <tr>
    <th>images</th>
    <th>name</th>
    <th>full name</th>
    <th>publisher</th>
  </tr>
</thead>
<tbody>
  {
    Heroes.map((hero) =>{
      return (
        <tr>
          <td><img src={hero.image.sm} alt={hero.name} width="80px"/></td>
          <td>{hero.name}</td>
          <td>{hero.biography.fullName ? hero.biography.fullName :"UNKNOWN"}</td>
          <td>{hero.biography.publisher}</td>
        </tr>
      )
    })
  }
</tbody>
</table>






  </div>
    
  );
}

export default App;
