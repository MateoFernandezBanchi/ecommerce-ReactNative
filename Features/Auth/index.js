import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { AUTH_SIGNIN, AUTH_SIGNUP } from "../../Constants/firebase";
const initialState = {
    value: {
    user: {
        userId: "",
        email: "",
        token: ""
    },
    loading: false, 
    error: ""
}
}
export const signUp = createAsyncThunk(
    'auth/signUp',
    async (emailAndPassword, asyncThunk) => {
        try {
           const res = await fetch (`${AUTH_SIGNUP}`, {
            method: 'POST',
            body: JSON.stringify({
                email:emailAndPassword.email, 
                password:emailAndPassword.password,
                returnSecureToken: true,
            }),
           });
           const data = await res.json() 
           console.log(data);
           return data
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)
export const signIn = createAsyncThunk(
    'auth/signUp',
    async (emailAndPassword, asyncThunk) => {
        try {
           const res = await fetch (`${AUTH_SIGNIN}`, {
            method: 'POST',
            body: JSON.stringify({
                email:emailAndPassword.email, 
                password:emailAndPassword.password,
                returnSecureToken: true,
            }),
           });
           const data = await res.json() 
           console.log(data);
           return data
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: {
        [signUp.pending] : (state) => {
            state.value.loading = true;
    },
    [signUp.fulfilled] : (state, { payload}) => {
        console.log(payload)
        if (payload.error) {
            state.value.error = payload.error.message
        }
        state.value.loading = false;
        state.value.user.userId = payload.localId;
        state.value.user.email = payload.email;
        state.value.user.token = payload.idToken;
},
[signUp.rejected] : (state) => {
    state.value.loading = false;
    state.value.error = "error en signUp";
},

}
})

export default authSlice.reducer;