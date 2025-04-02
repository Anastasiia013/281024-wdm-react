import axios from "axios";

const usersInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/users"
});

export const getUsers = async ()=> {
    const {data} = await usersInstance.get("/");
    return data;
}

export const addUser = async newUser => {
    const {data} = await usersInstance.post("/", newUser);
    return data;
}

export const deleteUser = async id => {
    const {data} = await usersInstance.delete(`/${id}`);
    return data;
}