import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const appi_url = `https://www.omdbapi.com?apikey=60b5b5e3`; // url API



// Api object
const movie = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => { // 1
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${appi_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => { // 2
    searchMovies('Batman');
  }, []);

  return ( // 3
    <div className='app'>
      <h1 className='text-center mt-5 mb-4'>Video Club app</h1>
      <div className='row'>
        <div className='search'>
          <input placeholder='Search for movies' className='form-control w-50' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button type='button' className='btn btn-dark' onClick={() => searchMovies(searchTerm)}><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      {
        movies.length > 0
        ? (
          <div className='container'>
            <div className='row gx-0'>
          {movies.map((movie) => (
              <MovieCard movie={movie} />
          ))}
          </div>
        </div>
        ) : (
        <div className='empty'>
          <h2>No movies found!</h2>
          </div>
        )
      }
    </div>
  )
}




export default App;
