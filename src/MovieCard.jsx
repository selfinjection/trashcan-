import React from "react";

const MovieCard = ({movie}) => {
    console.log(movie)
    return (
        <div className='movie'>
            <div>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <p>{movie.Type}</p>
            </div>
            <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https//via.placeholder.com/400'} alt={movie.Title} style={{width: '400px', height: '400px'}}/>
            </div>
        </div>
    )
}

export default MovieCard;