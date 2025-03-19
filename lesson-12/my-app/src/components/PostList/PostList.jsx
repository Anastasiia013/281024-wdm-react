import { useState, useEffect } from "react";

import Modal from "../Modal/Modal";

import { getPosts, getPostById } from "../../api/posts";

import styles from "./PostList.module.css";

const PostList = ()=> {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [singlePost, setSinglePost]= useState(null);

    useEffect(()=> {
        const fetchPosts = async()=> {
            try {
                setLoading(true);
                setError(false);
                const data = await getPosts(page);
                // const {data: randomUserData} = await axios.get("https://randomuser.me/api");
                // const [user] = randomUserData.results;
                // console.log(user);
                setItems(prevItems => [...prevItems, ...data]);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [page]);

    const loadMore = async ()=> setPage(prevPage => prevPage + 1);

    const showPost = async(id)=> {
        try {
            const data = await getPostById(id);
            setSinglePost(data);
            toggleModal();
        }
        catch {
            console.log(error)
        }
    }

    const closePost = ()=> {
        toggleModal();
        setSinglePost(null);
    }

    const toggleModal = ()=> {
        setShowModal(prevState => !prevState);
    }

    const elements = items.map(item => (
        <li onClick={() => showPost(item.id)} className={styles.item} key={item.id}>
            {item.title}
        </li>
    ));
    
    return (
        <div>
            {showModal && <Modal close={closePost} close={closePost}>
                <h3>{singlePost.title}</h3>
                <p>{singlePost.body}</p>
            </Modal>}
            {error && <p className={styles.error}>{error}</p>}
            <ul>
                {elements}
            </ul>
            {loading && <p>Посты загружаются...</p>}
            {Boolean(items.length) && <button onClick={loadMore}>Загрузить еще</button>}
        </div>
    )
}

export default PostList;