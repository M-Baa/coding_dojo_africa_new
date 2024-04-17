import {Route , Routes, useActionData } from 'react-router-dom';

import People from './components/People';

import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function App() {

    const [search,setSearch]=useState("")
    const [id,setid]=useState("")
    const nav = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    nav(`/${search}/${id}`)
  }
  return (
    <div className="container">
      <form onSubmit={submit}>
        <label className='form-label'>Search for : </label>
        <select   className='form-select' onChange={(e) => { setSearch(e.target.value) }} >
          <option></option>
        <option>people</option>
        <option>planets</option>
        </select>
        <label>ID : </label>
        <input type="text" className='form-control'    onChange={(e) => { setid(e.target.value) }} />
        <button className='btn btn-primary'>Search</button>
  </form>
  <Routes>
    <Route path="/:search/:id" element={<People/>}/>
  

  </Routes>



    </div>
  );
}

export default App;
