import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DB_URL } from "../../Constants/firebase";
import { PRODUCTS } from "../../Data/ProductsData";
const initialState = {
    value: {
        cart: [],
        response: {},
        loading: false,
        error: false,
    }
};

export const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async ({userId, items, total}, asyncThunk) => {
        console.log(userId);
        console.log(items);
        try {
        const res = await fetch(
            `${DB_URL}orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                date: new Date().toLocaleDateString(),
                items: items,
                id: Math.floor(Math.random() * 1000000),
                userId: userId,
                total:total
            })
        }
        )
        const data = res.json();
        return data;} catch (error) {
            return rejectWithValue('Opps there seems to be an error');
        }
    }
)
const cartSlice = createSlice({
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
                const product = PRODUCTS.find(product => product.id === action.payload.id);
                console.log(product)
                state.value.cart.push({ ...product, quantity: 1 });
            }
        },
        removeItem: (state, action) => { 
            state.value.cart = state.value.cart.filter(item => item.id !== action.payload.id);
        },
        removeCart: (state) => {
            state.value.cart = [];
        }

    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true;
        },
        [confirmPurchase.fulfilled]: (state, { payload }) => {
            // state.value.response = payload;
            // state.value.loading = false;
            const formattedOrders = Object.entries(payload).map(item => {
                return {
                    id: item[0],
                    ...item[1],
                };
            });
            state.value.response = formattedOrders;
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false;
            state.value.error = true;
        }
    }
});

export const { addItem, removeItem, removeCart } = cartSlice.actions;
export default cartSlice.reducer;