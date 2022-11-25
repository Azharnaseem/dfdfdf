import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isLogin: false,
};
export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.isLogin = true
        },
        logout: (state) => {
            state.user = null
            state.isLogin = false
        },
        updateUser: (state, action) => {
            state.user = action.payload.user;
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions;
export const selectUser = state => state.Auth.user;
export const selectIsLogin = state => state.Auth.isLogin;
export default authSlice.reducer;