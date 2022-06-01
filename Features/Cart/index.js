import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";
import { PRODUCTS } from "../../Data/Products";
const initialState = {
    value: {
        cart: [],
        response: {},
        loading: false,
        error: false,
    }
};

const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async (items, asyncThunk) => {
        const res = await fetch(
            `${DB_URL}orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                date: new Date().toLocaleDateString(),
                items: items,
            })
        }
        )
        const data = res.json();
        return data;
    }
)
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const productRepeated = state.value.cart.find(item => item.id === action.payload.id);
            if (productRepeated) {
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity++
                    return item
                });
            } else {
                const product = PRODUCTS.value.products.find(product => product.id === action.payload.id);
                state.value.cart.push({ ...product, quantity: 1 });
            }
        },
        removeItem: () => { },


    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true;
        },
        [confirmPurchase.fulfilled]: (state, { payload }) => {
            state.value.response = payloadstate.loading = false;
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false;
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;