export const selectAllMovies = (store) => store.movies;

export const selectFavoriteMovies = (store) =>
  store.movies.filter((item) => item.favorite);

export const selectFilmsFromMovies = (store) =>
  store.movies.filter((item) => item.genre === "film");

export const selectSerialsFromMovies = (store) =>
    store.movies.filter((item) => item.genre === "serial");

export const selectCartoonsFromMovies = (store) =>
    store.movies.filter((item) => item.genre === "cartoon");