import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUserLogin} from "../../api/apiUser";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) =>{
        const result = await fetchUserLogin(userCredentials);
        if(userCredentials.remember){
            window.localStorage.setItem('user', result.user);
            window.localStorage.setItem('token', result.token);
        }
        return result;
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: window.localStorage.getItem('user') !== null && window.localStorage.getItem('token') !== null ? {user: window.localStorage.getItem('user'), token: window.localStorage.getItem('token')} : null,
        error: null,
    },
    reducers: {
        removeUser(state) {
            state.user = null;
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state)=>{
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action)=>{
                state.loading = false;
                state.user = null;
                if(action.error.message === 'Request failed with statuts code 400'){
                    state.error = 'Mot de passe ou email incorrect';
                }else {
                    state.error = action.error.message;
                }
            })
    }
});

export const { removeUser } = userSlice.actions
export default userSlice.reducer;