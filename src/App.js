import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './styles/App.css';

const api_link = 'http://www.omdbapi.com/?apikey=7c2eeefe'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${api_link}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  return (
    <div className="App">
      <h1>Movies</h1>
      <div className='search'>
        <input 
          placeholder='search for movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMovies(searchTerm)
              }
            }
          } />
      </div>
      {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => {
              return (<MovieCard movie={movie} />)
            })}
          </div>
        ) : (
          <h1>no movies found</h1>
        )
      }
    </div>
  );
}

export default App;

