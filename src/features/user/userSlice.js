import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(userCredencials)=>{
        console.log(JSON.stringify(userCredencials));
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(userCredencials)
        };
        debugger;
        const response = await fetch('http://localhost:3001/api/v1/user/login',options)
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    }
});

export default userSlice.reducer;