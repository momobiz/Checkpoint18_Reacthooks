import React from 'react';

const MovieCard = ({movie}) => {
    return (
        
        <div className="col-sm-3 mb-4">
        <div className="card">
          <img src={movie.posterUrl} alt="" className="card-img-top" height="400px" ></img>
          <div className="card-body">
            <h5 className="card-title"> Titre : {movie.title}</h5>
            <p className="card-text"> Description : {movie.description} </p>
            <button type="button" className="btn btn-primary btn-sm" > Note : {movie.rate} </button>
           <a href="#" className="btn btn-outline-success btn-sm" style={{marginLeft:"30px"}}> Lancements </a>

          </div>
         </div>
        </div>
 


        
    );
}

export default MovieCard;
