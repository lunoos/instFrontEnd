import api from "../../Services/api";


export const fetchFeed = () => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_FEED_REQUEST' });
    const posts = await api.getFeed();
    dispatch({ type: 'FETCH_FEED_SUCCESS', payload: posts });
  } catch (error) {
    dispatch({ type: 'FETCH_FEED_FAILURE', payload: error.message });
  }
};

export const likePost = (postId) => async (dispatch) => {
    try {
      await api.likePost(postId);
      dispatch({ type: 'LIKE_POST', payload: postId });
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };
  
  export const dislikePost = (postId) => async (dispatch) => {
    try {
      await api.dislikePost(postId);
      dispatch({ type: 'DISLIKE_POST', payload: postId });
    } catch (error) {
      console.error('Error disliking post:', error);
    }
  };