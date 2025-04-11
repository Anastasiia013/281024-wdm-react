import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export const searchPosts = async q => {
    const {data} = await postsInstance.get(`?q=${q}`);
    // const {data} = await postsInstance.get("/", {
    //     params: {
    //         q,
    //     }
    // });
    return data;
}