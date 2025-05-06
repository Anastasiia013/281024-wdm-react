import { useCallback } from "react";
import { useDispatch } from "react-redux";

import MovieListItem from "./MovieListItem/MovieListItem";

import {
  deleteMovie,
  toggleFavoriteMovie,
} from "../../../redux/movies/movies-thunks";

import styles from "./MovieList.module.css";

const MovieList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeleteMovie = useCallback(
    (id) => dispatch(deleteMovie(id)),
    [dispatch]
  );

  const onToggleFavorite = useCallback(
    (id) => dispatch(toggleFavoriteMovie(id)),
    [dispatch]
  );

  const elements = items.map((item) => (
    <MovieListItem
      key={item.id}
      {...item}
      onDeleteMovie={onDeleteMovie}
      onToggleFavorite={onToggleFavorite}
    />
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;
