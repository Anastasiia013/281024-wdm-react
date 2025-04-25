import backendInstance from "./backendInstance";

export const getPopularProducts = async ()=> {
    const {data} = await backendInstance.get("/products");
    return data.data;
}