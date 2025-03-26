import { useState, useEffect } from "react";

import PostBlock from "./PostBlock/PostBlock";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";

import { getPosts } from "../../api/posts";

import styles from "./Posts.module.css";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchItems = async()=> {
        try {
            setLoading(true);
            const data = await getPosts();
            setItems(data);

        }
        catch(error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    fetchItems();
  }, []);

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <PostBlock title="Список постов">
          <PostList items={items} />
          {loading && <p>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
        </PostBlock>
        <PostBlock title="Написать пост">
          <PostForm />
        </PostBlock>
      </div>
    </div>
  );
};

export default Posts;
