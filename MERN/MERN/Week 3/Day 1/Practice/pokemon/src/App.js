import React from "react";
import {useState,useEffect} from 'react';

function App() {
  const[pokemons,setPokemons]=useState([])

const FetchPokemons =()=>{
    
    fetch("://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => {
        return response.json()
      
      }).then((JsonResponse) => {
        console.log(JsonResponse)
        setPokemons(JsonResponse)
      })
      .catch(err => {
        console.log(err);
      })
  }

  // const AxiosHeroes = () => {
  //   axios.get("://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //     .then((res) => {
    
  //       console.log(res.results.data)
  //       setHeroes(res.results.data) // we know from the prev console log that this IS an Array of Data
  //     }).catch((err) => {
  //       console.log("❌❌❌❌❌❌", err)
  //     })
  // }








  return (
    <div className="App">
      <h1>pokemons</h1>
      <button onClick={FetchPokemons}>Fetch Pokemons</button>
{
  pokemons.map((pokemon)=>{
    return (
      <ul>
        <li> {pokemon.results.name}</li>
        <li>{pokemon.results.name}</li>
        <li>{pokemon.results.name}</li>

        
      </ul>
    )
  })
}
    </div>

    
  );
}

export default App;






