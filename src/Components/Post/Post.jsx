// import React from 'react'

import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="userStyle">
      <h4>post of id:{id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleShowDetails}>Click to see dtls </button>
      {/* <Link</Link> */}
    </div>
  );
};

export default Post;
