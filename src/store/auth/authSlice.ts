import { createSlice } from '@reduxjs/toolkit';

import { AuthData } from '@store/auth/types';
import { loginUser } from '@services/api';

const initialState = {
  data: null,
  error: null,
  isLoading: true,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    setAuth: (state, action) => ({
      ...state,
      data: action.payload,
      isLoading: false,
      isAuthenticated: true,
    }),
    errorAuth: (state, action) => ({
      ...state,
      error: action.payload,
      isLoading: false,
    }),
    resetAuth: () => ({
      ...initialState,
      isLoading: false,
    }),
  },
});

// Extract each action creator by name
const { loading, setAuth, resetAuth, errorAuth } = authSlice.actions;

const reloadAuth = (data: AuthData) => (dispatch: any) => {
  const { token, user } = data;
  if (token && user) {
    dispatch(setAuth(data));
  } else {
    dispatch(resetAuth());
  }
};

const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(loading());
    const response = await loginUser(email, password);
    const { data } = response;
    dispatch(reloadAuth(data));
  } catch (e) {
    dispatch(errorAuth(e.response.data));
  }
};

const logout = () => (dispatch: any) => {
  dispatch(resetAuth());
};

// Export needed thunks
export { login, reloadAuth, logout };

// Export the reducer as default
export default authSlice.reducer;
