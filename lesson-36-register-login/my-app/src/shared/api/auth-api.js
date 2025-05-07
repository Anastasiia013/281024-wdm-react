import axios from "axios";

import requestDecorator from "./requestDecorator";

const authInstance = axios.create({
    baseURL: "http://localhost:5000/api"
})

export const registerUserApi = requestDecorator(async payload => {
    const {data} = await authInstance.post("/auth/register", payload);
    return data;
});