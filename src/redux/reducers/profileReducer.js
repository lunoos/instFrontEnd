const initialState = {
    profile: null,
    loading: false,
    error: null
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PROFILE_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_PROFILE_SUCCESS':
        return { ...state, profile: action.payload, loading: false };
      case 'FETCH_PROFILE_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default profileReducer;