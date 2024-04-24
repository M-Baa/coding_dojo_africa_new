import './App.css';
import React from 'react';
import List from './components/List';
import Show from './components/Show';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/"  element={<List/>}/>
      
      <Route path="/country/:name"  element={<Show/>}/>
      
      </Routes>
    
    </div>
  );
}

export default App;
