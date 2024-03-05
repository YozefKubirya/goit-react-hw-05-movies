import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL=`https://api.themoviedb.org/3/movie`;
const API_KEY=`1751ed552758886790b5045f1f278379`
const MOVIE_POSTER_LINK  = 'https://image.tmdb.org/t/p/w500';
const Cast = () => {
   const [casts, setCasts]=useState([]);
   const {movieId}=useParams();
   useEffect(()=>{
const handleFetch= async id =>{
   try{
      const {data}= await axios.get (`${BASE_URL}/${id}/credits?api_key=${API_KEY}&language=en-US`);
      // console.log(data);
      setCasts(data.cast);
   }
   catch(error){
  console.log(error);
   }
   }    
     handleFetch(movieId)
   },[movieId])
     
   return (<div>
      <ul>
         {casts.map(({original_name,profile_path,cast_id,character,})=>{let imgLink=MOVIE_POSTER_LINK+profile_path;
        return(
         <li key={cast_id}>
         <img
                  src={imgLink}
                  alt="character"
                  width="150"
                />
                <h3>{original_name}</h3>
                <p>Character: {character}</p>
         </li>
        ) }
         )}
      </ul>
   </div>)
};
export default Cast;
