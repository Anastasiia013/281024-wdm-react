export const selectAllMovies = (store) => store.movies.items;

export const selectMovies = store => store.movies;

export const selectFavoriteMovies = (store) =>
  store.movies.items.filter((item) => item.favorite);

export const selectFilmsFromMovies = (store) =>
  store.movies.items.filter((item) => item.genre === "film");

export const selectSerialsFromMovies = (store) =>
    store.movies.items.filter((item) => item.genre === "serial");

export const selectCartoonsFromMovies = (store) =>
    store.movies.items.filter((item) => item.genre === "cartoon");