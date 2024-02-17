import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    selectedTags: [],
    searchedWord:""

}

//thunk action creation for async task


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        addSelectedTags: (state, action) => {
            state.selectedTags.push(action.payload)

        },
        removeSelectedTags: (state, action) => {
            state.selectedTags = state.selectedTags.filter((tag) => tag !== action.payload)

        },
        searched: (state, action) => {
            state.searchedWord = action.payload
        }

    },

})

export default filterSlice.reducer
export const {addSelectedTags, removeSelectedTags, searched} = filterSlice.actions