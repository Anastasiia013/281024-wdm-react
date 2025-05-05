import { useSelector } from "react-redux";

import MovieList from "../../modules/MyMovies/MovieList/MovieList";

import { selectMovies, selectFilmsFromMovies } from "../../redux/movies/movies-selectors";

const MyFilmsPage = ()=> {
    const {loading, error} = useSelector(selectMovies);
    const films = useSelector(selectFilmsFromMovies);

    if(loading) return <p>Loading...</p>;

    if(error) return <p style={{color: "red"}}>{error}</p>;

    return <MovieList items={films} />
}

export default MyFilmsPage;