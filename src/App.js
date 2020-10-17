import React from 'react';

import './App.css';
import Filter from './Components/Filter/Filter';
import MovieList from './Components/MovieList/MovieList';
import {useState} from 'react';
import MotCle from './Components/Filter/MotCle';


function App() {
const [rate, setRate]=useState(0);
const [motCle, setMotCle]=useState('');


  return (
    <div className="App">
      <h2> La cinéthèque </h2>
    
      <div style={{display:"flex", justfycontent:"flex-start"}}>
      <Filter setRate={setRate}/>
      <MotCle setMotCle={setMotCle}/>
      </div>
      <MovieList rate={rate} motCle={motCle}/>

    
        
    </div>
  );
}

export default App;
