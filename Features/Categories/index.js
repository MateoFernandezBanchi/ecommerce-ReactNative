import { createSlice } from "@reduxjs/toolkit"
import { CATEGORY } from "../../Data/CategoriesData.js"

const initialState = {
    value: {
        categories: CATEGORY,
        categorySelected: "",
    }
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers:{
        selectedCategory: (state, action) => {
            const categorySelected = state.value.categories.find(category => 
                category.id === action.payload);
                state.value.categorySelected = categorySelected.category;
    }
    }
})
export const {selectedCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;