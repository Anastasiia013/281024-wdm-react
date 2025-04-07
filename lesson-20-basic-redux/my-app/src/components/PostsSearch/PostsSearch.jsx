import {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostList from "./PostList/PostList";

import { searchPosts } from "../../api/posts";

import styles from "./PostsSearch.module.css";

const PostsSearch = ()=> {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const q = searchParams.get("q");

    useEffect(()=> {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const data = await searchPosts(q);
                console.log(data);
                setPosts(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        if(q) fetchPosts();
    }, [q]);

    const onSearch = ({q})=> setSearchParams({q});

    return (
        <div className={styles.container}>
            <PostsSearchForm onSearch={onSearch} />
            {loading && <p>Loading search...</p>}
            {error && <p style={{color: "red"}}>Search error{error}</p>}
            <PostList items={posts} />
        </div>
    )
}

export default PostsSearch;