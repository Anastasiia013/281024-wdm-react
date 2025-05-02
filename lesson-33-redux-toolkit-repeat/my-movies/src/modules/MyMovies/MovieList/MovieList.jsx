import styles from "./MovieList.module.css";

const MovieList = ({ items = [] }) => {
  const elements = items.map((item) => (
    <li item={item.id}>
      {item.title}
      <button>{item.favorite ? "Remove from" : "Add to"} favorite</button>
      <button>Delete</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MovieList;
