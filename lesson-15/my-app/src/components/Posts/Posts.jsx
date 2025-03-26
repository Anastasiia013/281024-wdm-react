import { useState, useEffect } from "react";

import PostBlock from "./PostBlock/PostBlock";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";

import { getPosts, deletePost, addPost } from "../../api/posts";

import styles from "./Posts.module.css";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(()=> {
    const fetchItems = async()=> {
        try {
            setLoading(true);
            const data = await getPosts({page, limit: 3});
            setItems(prevItems => [...prevItems, ...data]);
            // setItems(data);
        }
        catch(error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    fetchItems();
  }, [page]);

  const nextPage = ()=> setPage(prevPage => prevPage + 1);

  const onAddPost = async newPost => {
    try {
      setLoading(true);
      const data = await addPost(newPost);
      setItems(prevItems => [...prevItems, data]);
    }
    catch(error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  const onDeletePost = async id => {
    try {
        setLoading(true);
        await deletePost(id);
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    catch(error) {
        setError(error.message);
    }
    finally {
        setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <PostBlock title="Список постов">
          <PostList items={items} onDeletePost={onDeletePost} />
          {loading && <p>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={nextPage} className={styles.next}>Далее</button>
        </PostBlock>
        <PostBlock title="Написать пост">
          <PostForm onAddPost={onAddPost} />
        </PostBlock>
      </div>
    </div>
  );
};

export default Posts;
