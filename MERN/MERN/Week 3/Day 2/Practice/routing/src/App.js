import {Route ,Routes} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Design from './components/Design';
import './App.css';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/home" element={<Home/>} />

      // this should display the number 4 or any other number

      <Route path="/:id" element={<Number/>}/>

      // this should display the world hello or any other world

      <Route path="/Hello/:word" element={<Hello/>} />

      <Route path="/Design/:word" element={<Design/>} />







    </Routes>
    </div>
  );
}

export default App;
