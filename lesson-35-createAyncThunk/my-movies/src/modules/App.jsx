import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header/Header";
import Navigation from "../pages/Navigation";

import { fetchMovies } from "../redux/movies/movies-thunks";

import "../shared/styles/style.css";

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Navigation />
    </>
  )
}

export default App
