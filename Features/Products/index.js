import { createSlice } from "@reduxjs/toolkit"
import { PRODUCTS } from "../../Data/ProductsData"

const initialState = {
    value: {
        products: PRODUCTS,
        productsByCategory: [],
        productSelected: {},
    }
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers:{
        setProductsByCategory: (state, action) => {
            const productsFiltered = state.value.products.filter(product => product.category === action.payload);
            state.value.productsByCategory = productsFiltered;
    },
        setProductSelected: (state, action) => {
            const productSelected = state.value.productsByCategory.find(product => product.id === action.payload);
            state.value.productSelected = productSelected;
    }
}
})

export const {setProductsByCategory, setProductSelected} = productsSlice.actions;
export default productsSlice.reducer;