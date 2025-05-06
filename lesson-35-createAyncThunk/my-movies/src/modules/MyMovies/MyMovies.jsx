import { useSelector, useDispatch } from "react-redux";

import MovieAddForm from "./MovieAddForm/MovieAddForm";
import MovieList from "./MovieList/MovieList";

import { addMovie } from "../../redux/movies/movies-thunks";

import { selectMovies } from "../../redux/movies/movies-selectors";

import styles from "./MyMovies.module.css";

const MyMovies = () => {
  const { items, loading, error } = useSelector(selectMovies);
  const dispatch = useDispatch();

  const onAddMovie = async (payload) => {
    dispatch(addMovie(payload));
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <MovieAddForm submitForm={onAddMovie} />
        {loading && <p>Loading....</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <MovieList items={items} />
    </div>
  );
};

export default MyMovies;
