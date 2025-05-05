import {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailed,
  addMovieRequest,
  addMovieSuccess,
  addMovieFailed,
  deleteMovieRequest,
  deleteMovieSuccess,
  deleteMovieFailed,
} from "./movies-slice";

import { getMoviesApi, addMovieApi, deleteMovieApi } from "../../shared/api/movies-api";

export const fetchMovies = () => {
  const func = async (dispatch) => {
    try {
        dispatch(fetchMoviesRequest());
        const data = await getMoviesApi();
        dispatch(fetchMoviesSuccess(data));
    } catch (error) {
      dispatch(fetchMoviesFailed(error?.response?.data?.message))
    }
  };

  return func;
};

export const addMovie = (payload) => {
  const func = async (dispatch) => {
    dispatch(addMovieRequest());
    try {
      const data = await addMovieApi(payload);
      dispatch(addMovieSuccess(data));
    } catch (error) {
      dispatch(addMovieFailed(error?.response?.data?.message));
    }
  };

  return func;
};

export const deleteMovie = (id) => {
    const func = async dispatch => {
        try {
            dispatch(deleteMovieRequest());
            await deleteMovieApi(id);
            dispatch(deleteMovieSuccess(id));
        }
        catch(error) {
            dispatch(deleteMovieFailed(error?.response?.data?.message));
        }
    }

    return func;
};

export const toggleFavoriteMovie = (payload) => {};
