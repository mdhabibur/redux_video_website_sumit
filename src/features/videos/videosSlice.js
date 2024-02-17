import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import videosAPI from "./videosAPI"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ""
}

//thunk action creation for async task
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({selectedTags, searchedWord}) => {
    const videos = await videosAPI(selectedTags, searchedWord)
    return videos

})


const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state,action) => {
            state.isLoading = true
            state.isError = false
            state.error = ""

        })
        .addCase(fetchVideos.fulfilled, (state,action) => {
            state.isLoading = false 
            state.isError = false
            state.error = ""
            state.videos = action.payload

        })
        .addCase(fetchVideos.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true
            state.error = action.error?.message

        })
    }
})

export default videosSlice.reducer