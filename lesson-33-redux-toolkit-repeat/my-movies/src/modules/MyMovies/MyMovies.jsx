import { useSelector, useDispatch } from "react-redux";

import MovieAddForm from "./MovieAddForm/MovieAddForm";
import MovieList from "./MovieList/MovieList";

import { addMovie } from "../../redux/movies/movies-slice";

import { selectAllMovies } from "../../redux/movies/movies-selectors";

import styles from "./MyMovies.module.css";

const MyMovies = ()=> {
    const allMovies = useSelector(selectAllMovies);
    const dispatch = useDispatch();

    const onAddMovie = data => {
        dispatch(addMovie(data));
    }

    return (
        <div className={styles.wrapper}>
            <MovieAddForm submitForm={onAddMovie} />
            <MovieList items={allMovies} />
        </div>
    )
}

export default MyMovies;