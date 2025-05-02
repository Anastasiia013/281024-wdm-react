import { useDispatch } from "react-redux";

import MovieAddForm from "./MovieAddForm/MovieAddForm";
import MovieList from "./MovieList/MovieList";

import { addMovie } from "../../redux/movies/movies-slice";

import styles from "./MyMovies.module.css";

const MyMovies = ()=> {
    const dispatch = useDispatch();

    const onAddMovie = data => {
        dispatch(addMovie(data));
    }

    return (
        <div className={styles.wrapper}>
            <MovieAddForm submitForm={onAddMovie} />
            <MovieList />
        </div>
    )
}

export default MyMovies;