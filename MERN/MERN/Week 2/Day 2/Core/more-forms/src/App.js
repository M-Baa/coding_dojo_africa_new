import React , {useState} from "react";
import './App.css';


function App() {
  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [confirmPassword,setconfirmPassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=(e)=>{
    if(firstName.length<2 || lastName.length<2 || email.length<2 || password!=confirmPassword || password<8){
      setError(true)
    }
    
    console.log(firstName,lastName,email,password,confirmPassword)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div>
            <input  placeholder="firstname" onChange={e=>setfirstName(e.target.value)}/>
        </div>
        {error&&firstName.length<2?
        <label>First Name must be at least 2 characters</label>:""}
        <div>
            <input  placeholder="lastname" onChange={e=>setlastName(e.target.value)}/>
        </div>
        {error?
        <label>Last name must be at least 2 characters </label>:""}
        <div>
            <input placeholder="email"  onChange={e=>setemail(e.target.value)}/>
        </div>
        {error?
        <label>Email must be at least 2 characters </label>:""}
        <div>
            <input  type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}/>
        </div>
        {error?
        <label>
        Password must be at least 8 characters
        Passwords must match </label>:""}
        <div>
            <input type="password" placeholder="confirmPassword "onChange={e=>setconfirmPassword(e.target.value)}/>
        </div>
      <div>
        <button>Submit</button>
      </div>





    </form>
    
    
    
    
    
    
    </>
    
  );
}

export default App;
