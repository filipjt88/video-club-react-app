import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-header'>
                    <h2>{movie.Year}</h2>
                </div>
                <div className='card-body'>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} className="img-fluid" alt={movie.Title} />
                </div>
                <div className='card-footer'>
                    <b>{movie.Type.toUpperCase()}</b>
                    <small>{movie.Title}</small>
                </div>
            </div>
        </div>
    )
}


export default MovieCard;