
import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';


function App() {
  const [username,setUsername]=useState("")

  return (
    <div className="App">
    <form>
      <FormInput placeholder="username"/>
      <FormInput placeholder="email"/>
      <FormInput placeholder="full name"/>
      <FormInput placeholder="something else"/>     
    </form>
    </div>
  );
}

export default App;
