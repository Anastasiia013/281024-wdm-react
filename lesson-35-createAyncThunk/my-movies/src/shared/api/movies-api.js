import axios from "axios";

const moviesInstance = axios.create({
    baseURL: "https://redux-auth-backend-qe7j.onrender.com/api/movies"
});

export const getMoviesApi = async()=> {
    const {data} = await moviesInstance.get("/");
    return data;
}

export const addMovieApi = async payload => {
    const {data} = await moviesInstance.post("/", payload);
    return data;
}

export const deleteMovieApi = async id => {
    const {data} = await moviesInstance.delete(`/${id}`);
    return data;
}