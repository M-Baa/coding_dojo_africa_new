
import './App.css';
import {useState} from 'react';


function App() {
  const [firstname,setfirstname]=useState("")
  const  [lastname,setlastname]=useState("")
  const   [email,setemail]=useState("")
  const   [password,setpassword]=useState("")
  const   [confirmpassword,setconfirmpassword]=useState("")
  const [allusers,setAllusers]=useState([])
  const adduser =(e)=>{
    e.preventDefault()
    const newuser={
      firstname:firstname,
      lastname:lastname,
      email:email,
      password,
      confirmpassword,
    }
    setAllusers([...allusers,newuser])
    setfirstname("")
    setlastname("")
    setemail("")
    setpassword("")
    setconfirmpassword("")
  }

  return (
    <div className="App">
    <h1>login form </h1>
    <form onSubmit={(e)=> adduser(e)}>
      <label htmlFor=''>firstname:</label>
      <input type='text'onChange={(e)=>setfirstname(e.target.value)} value={firstname}/><br></br>
      <label htmlFor=''>lastname: </label>
      <input type='text'onChange={(e)=>setlastname(e.target.value)} value={lastname}/><br></br>
      <label htmlFor=''>email :</label>
      <input type='text'onChange={(e)=>setemail(e.target.value)} value={email}/><br></br>
      <label htmlFor=''>password : </label>
      <input type='password'onChange={(e)=>setpassword(e.target.value)} value={password}/><br></br>
      <label htmlFor=''>confirmpassword:</label>
      <input type='password'onChange={(e)=>setconfirmpassword(e.target.value)} value={confirmpassword}/><br></br>
    </form>
    <h1> your form data </h1>
    <div>
    current firstname:{firstname}<br></br>
    current lastname:{lastname}<br></br>
    current email :{email}<br></br>
    current password:{password}<br></br>
    current confirmpassword : {confirmpassword}<br></br>
    </div>
    <div>
      {allusers.map((b,i)=> <showone b={b} />)}
    </div>
    </div>
  );
}

export default App;
