// src/components/Feed/Post.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost, dislikePost } from '../../redux/actions/feedActions';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleLike = () => dispatch(likePost(post.id));
  const handleDislike = () => dispatch(dislikePost(post.id));

  return (
    <div className="post">
      <img src={post.imageUrl} alt={post.caption} />
      <p>{post.caption}</p>
      <div className="post-actions">
        <button onClick={handleLike}>Like ({post.likes})</button>
        <button onClick={handleDislike}>Dislike ({post.dislikes})</button>
      </div>
    </div>
  );
};

export default Post;