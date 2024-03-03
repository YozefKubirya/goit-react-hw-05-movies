import { lazy } from "react";
import { Routes, Route, } from 'react-router-dom'
import Layout from "./Layout";
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("../components/Cast"));
const Reviews = lazy(() => import("../components/Reviews"));
const MovieDetalies = lazy(() => import("../pages/MovieDetalies"));
export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetalies />}>
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/>} />
          </Route>
      </Route>
     </Routes>
    </div>
  );
};