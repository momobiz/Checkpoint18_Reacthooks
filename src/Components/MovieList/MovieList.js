import React,{useState} from 'react';
import AddMovie from '../AddMovie/AddMovie.js';
import Data from '../Data.js';
import MovieCard from '../MovieCard/MovieCard.js';
import movieList from './movieList.css';

const MovieList = ({rate,motCle}) => {
   var [movieList,setMovieList]=useState(Data);
  
   const addToList=(newMovie)=>{
      setMovieList([...movieList,newMovie]);
  }
  
   


    return (
        <div className="cinetheque">
          
          {movieList.filter(movie=>movie.rate>=+rate && movie.title.toLocaleLowerCase().includes(motCle)).map((movie,index)=>(
              <MovieCard movie={movie} key={index}/>
          ))}
            <AddMovie addToList={addToList}/>
            
        </div>
    );
}

export default MovieList;
