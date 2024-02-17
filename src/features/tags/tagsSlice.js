import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tagsAPI from "./tagsAPI"


const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ""
}

//thunk action creation for async task
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await tagsAPI()
    return tags
})


const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state,action) => {
            state.isLoading = true
            state.isError = false
            state.error = ""

        })
        .addCase(fetchTags.fulfilled, (state,action) => {
            state.isLoading = false 
            state.isError = false
            state.error = ""
            state.tags = action.payload

        })
        .addCase(fetchTags.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true
            state.error = action.error?.message

        })
    }
})

export default tagsSlice.reducer