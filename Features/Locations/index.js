import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        location: []
    }
}
const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addLocation: (state, {payload}) => {
            state.value.location.push(payload)
        }
    },
    extraReducers: {

    }
})

export const {addLocation} = locationSlice.actions;
export default locationSlice.reducer;

