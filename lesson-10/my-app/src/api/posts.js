import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 5,
    }
});

export const getPosts = async(_page = 1)=> {
    const {data} = await postsInstance.get("/", {
        params: {
            _page,
        }
    })
    // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    // const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
    //     params: {
    //         _page,
    //         _limit: 5,
    //     }
    // });
    return data;
}

export const getPostById = async (id = 1)=> {
    const {data} = await postsInstance.get(`/${id}`);
    return data;
}