import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchUserLogin} from "../../api/apiUser";
import { fetchEditProfil, fetchProfil } from "../../api/apiProfil";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) =>{
        let result = {};
        result.session = await fetchUserLogin(userCredentials);
        result.profile = await fetchProfil(result.session.body.token)
        if(userCredentials.remember){
            window.localStorage.setItem('token', result.session.body.token);
            // window.localStorage.setItem('profile', JSON.stringify(result.profile.body));
        }
        return result;
    },
);

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (token) =>{
        return {profile: await fetchProfil(token)}
    },
);

export const editProfile = createAsyncThunk(
    'user/editProfile',
    async (newProfile) =>{
        let firstName = newProfile.firstNameInput;
        let lastName = newProfile.lastNameInput;
        return await fetchEditProfil({firstName, lastName}, newProfile.token)
    },
);

const getCacheUser = () => {
    if(window.localStorage.getItem('token') !== null){
        return window.localStorage.getItem('token');
    }else{
        return null;
    }
    
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        token: getCacheUser(),
        profile: null,
        error: null,
    },
    reducers: {
        removeUser(state) {
            state.token = null;
            state.profile = null;
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('profile');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state)=>{
                state.loading = true;
                state.token = null;
                state.profile = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.token = action.payload.session.body.token;
                state.profile = action.payload.profile.body;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action)=>{
                state.loading = false;
                state.token = null;
                state.profile = null;
                if(action.error.message === 'Request failed with statuts code 400'){
                    state.error = 'Mot de passe ou email incorrect';
                }else {
                    state.error = action.error.message;
                }
            })
            .addCase(getProfile.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action)=>{
                state.loading = false;
                state.profile = action.payload.profile.body;
                state.error = null;
            })
            .addCase(getProfile.rejected, (state, action)=>{
                state.loading = false;
                state.profile = null;
                if(action.error.message === 'Request failed with statuts code 401'){
                    removeUser();
                }else {
                    state.error = action.error.message;
                }
            })
            .addCase(editProfile.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(editProfile.fulfilled, (state, action)=>{
                state.loading = false;
                state.profile = action.payload.body;
                state.error = null;
            })
            .addCase(editProfile.rejected, (state, action)=>{
                state.loading = false;
                state.profile = null;
                state.error = action.error.message;
            })
    }
});

export const { removeUser } = userSlice.actions
export default userSlice.reducer;