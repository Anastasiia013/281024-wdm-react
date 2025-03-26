import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts"
})

export const getPosts = async ({page = 1, limit = 5})=> {
    const {data} = await postsInstance.get("/", {
        params: {
            page,
            limit,
        }
    });

    return data;
}

export const deletePost = async id => {
    const {data} = await postsInstance.delete(`/${id}`);

    return data;
}