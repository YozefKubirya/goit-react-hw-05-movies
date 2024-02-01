import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { NavLink, Link, Outlet, useLocation, useParams } from "react-router-dom";


export const MovieDetalies = () => {
   const [movie, setMovie] = useState(null);
   const location = useLocation();
   const { movieId } = useParams();

   useEffect(() => {
      const handleFetch = async (id) => {
         try {
            const { data } = await axios.get(
               `https://api.themoviedb.org/3/movie/${id}?api_key=1751ed552758886790b5045f1f278379&language=en-US`
            );
            setMovie(data);
         } catch (error) {
            console.log(error);
         }
      };

      if (movieId) {
         handleFetch(movieId);
      } else {
         console.log("Missing movieId");
      }
   }, [movieId]);

   if (movie === null) {
      return ;
   }
   const { overview, genres, poster_path, vote_average,title}=movie;
   const genresPars =genres.map(({ name, id }) => {
      const gens = `${name} `;
      return gens;
    });
    const userScoreNormalized = (vote_average * 10).toFixed()
   return (<> <Link to={location.state?.from ?? '/movie'}>
      Back
   </Link>
      <div>

         <div>
            <img src={ poster_path} alt="Poster" height="500" />
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
            <NavLink
               to="casts"
               state={{ from: location.state?.from }}

            >
               Casts
            </NavLink>
            <NavLink
               to="reviews"
               state={{ from: location.state?.from }}

            >
               Reviews
            </NavLink>
         </ul>
         <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
         </Suspense>
      </div></>);
};
export default MovieDetalies;