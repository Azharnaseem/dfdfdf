import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appLoader: false
};
export const configSlice = createSlice({
    name: 'Config',
    initialState,
    reducers: {
        setAppLoader: (state, action) => {
            state.appLoader = action.payload
        },
    },
});

export const { setAppLoader } = configSlice.actions;
export const selectAppLoader = state => state.Config.appLoader;
export default configSlice.reducer;