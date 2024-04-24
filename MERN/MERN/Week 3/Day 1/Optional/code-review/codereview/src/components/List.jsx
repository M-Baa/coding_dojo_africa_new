import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
const List = () => {

    const [countries, setCountries] = useState([])
    const [updated,setUpdated]=useState(true)
    const [newName,setNewName]=useState("")
    const [newFlag,setNewFlag]=useState("")
    const nav = useNavigate()
    useEffect(() => {
        axios.get(
            "https://restcountries.com/v3.1/all?fields=name,flags,independent"
        ).then((res) => setCountries(res.data))
            .catch((err) => console.log(err));
    }, [])

    const updateCountry =(index)=>{
        const newList = countries
        newList[index].independent = !newList[index].independent
        setCountries(newList)
    }

    const deleteCountry =(index)=>{
        setCountries(countries.filter((c,i)=> i!=index))
    }

    const createCountry =(e)=>{
        e.preventDefault()
        setCountries([...countries,{name:{common:newName},flags:{png:newFlag},independent:true}])
        setNewFlag("")
        setNewName("")
    }

    return (
        <div>
            <h1>countries list</h1>
            <form onSubmit={(e)=>createCountry(e)}>
                <label className='label-control'>name</label>
                <input   value={newName} type="text" className='form-control' onChange={(e)=>setNewName(e.target.value)}/>
                <label className='label-control'>flag</label>
                <input  value={newFlag} type="text" className='form-control' onChange={(e)=>setNewFlag(e.target.value)}/>
                <button className="btn btn-success">create</button>
            </form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Flag</th>
                    <th>Actions</th>
                </tr>
                <tbody>
                    {countries.map((c, i) => (
                        <tr>
                            <td>{c.independent ? c.name.common :<s>{c.name.common}</s>}</td>
                            <td><img src={c.flags.png} alt={c.flags.alt} height={100} /></td>{" "}
                            <td>
                                <input type="checkbox"  onChange ={()=> {updateCountry(i); setUpdated(!updated);}}
                                checked={c.independent} />{" "}
                                <button  className='btn btn-info' onClick ={()=> nav(`/country/${c.name.common}`)}>View</button>
                                <button className='btn btn-danger' onClick ={()=> deleteCountry(i)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List