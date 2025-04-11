import axios from "axios";

const authInstance = axios.create({
    baseURL: "https://redux-auth-backend-qe7j.onrender.com/api/auth"
})

export const login = async payload => {
    const {data} = await authInstance.post("/login", payload);
    return data;
}