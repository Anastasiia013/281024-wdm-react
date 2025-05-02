import MovieAddForm from "./MovieAddForm/MovieAddForm";
import MovieList from "./MovieList/MovieList";

import styles from "./MyMovies.module.css";

const MyMovies = ()=> {
    return (
        <div className={styles.wrapper}>
            <MovieAddForm />
            <MovieList />
        </div>
    )
}

export default MyMovies;