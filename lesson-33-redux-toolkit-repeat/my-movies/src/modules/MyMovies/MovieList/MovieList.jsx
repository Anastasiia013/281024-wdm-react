import { useDispatch } from "react-redux";

import {
  deleteMovie,
  toggleFavorite,
} from "../../../redux/movies/movies-slice";

import styles from "./MovieList.module.css";

const MovieList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeleteMovie = (id) => dispatch(deleteMovie(id));

  const onToggleFavorite = (id) => dispatch(toggleFavorite(id));

  const elements = items.map((item) => (
    <li item={item.id}>
      {item.title}
      <button onClick={() => onToggleFavorite(item.id)}>
        {item.favorite ? "Remove from" : "Add to"} favorite
      </button>
      <button onClick={() => onDeleteMovie(item.id)}>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;
