import api from '../../services/api';

export const fetchProfile = (username) => async (dispatch) => {
  try {
    dispatch({ type: 'FETCH_PROFILE_REQUEST' });
    const profile = await api.getProfile(username);
    dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: profile });
  } catch (error) {
    dispatch({ type: 'FETCH_PROFILE_FAILURE', payload: error.message });
  }
};