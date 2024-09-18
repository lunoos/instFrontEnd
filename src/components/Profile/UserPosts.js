import React from 'react';
import Post from '../Feed/Post';

const UserPosts = ({ posts }) => (
  <div className="user-posts">
    <h3>Posts</h3>
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

export default UserPosts;