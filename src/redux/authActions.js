import authService from "../Services/authService";


export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_REQUEST' });
    const user = await authService.login(username, password);
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const logout = (username, password) => async (dispatch) => {
    try {
      dispatch({ type: 'LOGOUT_REQUEST' });
      const user = await authService.login(username, password);
      dispatch({ type: 'LOGOUT_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGOUT_FAILURE', payload: error.message });
    }
  };