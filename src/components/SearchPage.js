import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
import MovieList from './MovieList';
import Header from './Header';

const SearchPage = () => {
    const { movieName }= useParams();
    const [ searchedMovies, setSearchedMovies] = useState(null);

    useEffect( () => {
        movieSearchResult();
    }, []);

    const movieSearchResult = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false`,
            API_OPTIONS
            );
        const json = await data.json();
        setSearchedMovies(json.results);
    }

  return (
    <>
        {/* <Header /> */}
        <div className='w-screen h-screen bg-black px-8 py-8'>
            <div className='text-3xl'>
        
                    <div className='text-white pl-5'>Movie results</div>
                    
             
                <MovieList title={`${movieName} Movies`} movies={searchedMovies} />
            </div>
        </div>
        
    </>
    
  )
}

export default SearchPage
