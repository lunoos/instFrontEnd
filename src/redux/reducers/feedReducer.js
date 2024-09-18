const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  
  const feedReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_FEED_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_FEED_SUCCESS':
        return { ...state, posts: action.payload, loading: false };
      case 'FETCH_FEED_FAILURE':
        return { ...state, error: action.payload, loading: false };
      case 'LIKE_POST':
      case 'DISLIKE_POST':
        return {
          ...state,
          posts: state.posts.map(post =>
            post.id === action.payload
              ? { ...post, likes: post.likes + (action.type === 'LIKE_POST' ? 1 : -1) }
              : post
          )
        };
      default:
        return state;
    }
  };
  
  export default feedReducer;