import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BASE_URL=`https://api.themoviedb.org/3/movie`;
const API_KEY=`1751ed552758886790b5045f1f278379`
const Reviews = () => {
   const [reviews,setReviews]=useState([]);

   const { movieId } = useParams();
   useEffect(()=>{
      const handleFetch=async id =>{
         try{
            const {data}=  await axios.get(`${BASE_URL}/${id}/reviews?api_key=${API_KEY}&anguage=en-US`);
            console.log(data);
            setReviews(data.results);
         }
         catch(error){
            console.log(error);
         }
         if(reviews.length===0){
            return <p>We don't have reviews for this movie.</p>
         }
      }
      handleFetch(movieId)
   },[movieId,reviews.length])
   return (<div>
      <ul>{reviews.map(({author,id,content})=>{
   return(  <> 
         <li key={id}>
            <h2>{author}</h2>
             <p>{content}</p>
         </li>
         </>
         )
      })}
      </ul>
   </div>)
};
export default Reviews;