import axios from "axios";

import { useState, useEffect, Suspense } from "react";
import { NavLink, Link, Outlet, useLocation, useParams } from "react-router-dom";
const BASE_URL=`https://api.themoviedb.org/3/movie`;
const API_KEY=`1751ed552758886790b5045f1f278379`
const MOVIE_POSTER_LINK = 'https://image.tmdb.org/t/p/w500';
export const MovieDetalies = () => {
   const [movie, setMovie] = useState(null);
   const location = useLocation();
   const { movieId } = useParams();

   useEffect(() => {
    
      const handleFetch = async (id) => {
         try {
            const { data } = await axios.get(
               `${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US`
            );
            setMovie(data);
          
         } catch (error) {
            console.log(error);
         }
      };

    handleFetch(movieId)
  
   }, [movieId]);

   if (movie === null) {
      return ;
   }   
   const { overview, genres, poster_path, vote_average,title}=movie;
   const genresPars =genres.map(({ name }) => {
      const gens = `${name} `;
      return gens;
    });

    const userScoreNormalized = (vote_average * 10).toFixed()
   return (<> <Link to={location.state?.from ?? '/movies'}>
      Back
   </Link>
      <div>

         <div>
            <img src={MOVIE_POSTER_LINK+poster_path} alt="Poster" height="500" />
            <h1>{title}:</h1>
            <p>User Score: {userScoreNormalized} </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genresPars}</p>
         </div>
      </div>
      <div>
         <ul>
          <li>  <NavLink
               to="casts"
               state={{ from: location.state?.from }}

            >
               Casts
            </NavLink>
            </li>
         <li>   <NavLink
               to="reviews"
               state={{ from: location.state?.from }}

            >
               Reviews
            </NavLink>
            </li>
         </ul>
         <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
         </Suspense>
      </div></>);
};
export default MovieDetalies;
