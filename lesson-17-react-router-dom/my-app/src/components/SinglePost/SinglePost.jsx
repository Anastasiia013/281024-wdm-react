import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getPostById } from "../../api/posts";

const SinglePost = ({ id }) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack} type="button">
        Go back
      </button>

      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default SinglePost;
