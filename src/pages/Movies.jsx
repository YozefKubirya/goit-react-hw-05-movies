import axios from 'axios'
import { useState,useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom"
const BASE_URL='https://api.themoviedb.org/3/search/movie?'
const API_KEY='1751ed552758886790b5045f1f278379'

const Movies = () => {
  const [query,setQuery]=useState('')
   const [movies,setSearchMovie]=useState([]);
   const location=useLocation();
   const [searchParams,setSearchParams]=useSearchParams();
   const movieName=searchParams.get('query');

useEffect(()=>{

  if(!movieName){
    return;
  }
  const handleFetch= async value=>{
    try {
      const { data } = await axios.get(
        `${BASE_URL}api_key=${API_KEY}&language=en-US&query=${value}&page=1&include_adult=false`
      );

      setSearchMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  handleFetch(movieName);
},[movieName])
  const onInputChange= e => {
    const {value}= e.target;
    setQuery(value);
  }
   const onFormSubmit = e =>{
    e.preventDeafult()
    setSearchParams({query});
   
    setQuery('')
  }

return(
  <>
  <form onSubmit={onFormSubmit}>
    <input type="text" name='query' onChange={onInputChange}
    value={query} placeholder='Search Movie'/>
    <button type='submit'>Submit</button>
  </form>
  <ul>
    {movies.map(movie=>{
      return(
        <li key={movie.id}> <Link to={`${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link></li>
      )
    })}
  </ul>
  </>
)
}
export default Movies;
