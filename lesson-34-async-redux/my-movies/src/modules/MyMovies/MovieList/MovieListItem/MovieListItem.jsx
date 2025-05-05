import { memo } from "react";

const MovieListItem = ({
  id,
  title,
  favorite,
  onToggleFavorite,
  onDeleteMovie,
}) => {
  return (
    <li item={id}>
      {title}
      <button onClick={() => onToggleFavorite(id)}>
        {favorite ? "Remove from" : "Add to"} favorite
      </button>
      <button onClick={() => onDeleteMovie(id)}>Delete</button>
    </li>
  );
};

export default memo(MovieListItem);
