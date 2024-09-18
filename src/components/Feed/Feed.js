import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed } from '../../redux/actions/feedActions';
import Post from './Post';

const Feed = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.feed);

  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="feed-container">
      <div><h1>This is Feed component</h1></div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;