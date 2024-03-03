import axios from 'axios'
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
const BASE_URL='https://api.themoviedb.org/3/trending/all/day?api_key=1751ed552758886790b5045f1f278379'

const Home = () => { 
   const [trendingMovies,setTrendingMovies]=useState([]);

   
    const location=useLocation()
    useEffect(()=>{
      const handleMovie = async ()=>{
         try {
            const {data} = await axios.get(BASE_URL);
            setTrendingMovies(data.results)
          } catch (error) {
            console.log(error)
          }
      }
      handleMovie();
    },[])
  
      return (
        <>
        <h1>Trending Movies Today</h1>
        <ul>
        {trendingMovies.map(({id, title}) => {
             return (
               <li key={id}>
                 <Link to={`movies/${id}`} state={{ from: location }}>
                   {title}
                 </Link>
               </li>
             )})}
         
        </ul>
        </>
      )
   };
   export default Home;