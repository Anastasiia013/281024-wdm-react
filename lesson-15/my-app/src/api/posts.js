import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts"
})

export const getPosts = async ()=> {
    const {data} = await postsInstance.get("/");
    return data;
}