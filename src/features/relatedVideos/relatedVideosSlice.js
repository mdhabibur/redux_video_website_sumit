import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import relatedVideosAPI from "./relatedVideosAPI"


const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ""
}

//thunk action creation for async task
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({tags, currentId}) => {
    const videos = await relatedVideosAPI(tags, currentId)
    return videos

})


const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchRelatedVideos.pending, (state,action) => {
            state.isLoading = true
            state.isError = false
            state.error = ""

        })
        .addCase(fetchRelatedVideos.fulfilled, (state,action) => {
            state.isLoading = false 
            state.isError = false
            state.error = ""
            state.videos = action.payload

        })
        .addCase(fetchRelatedVideos.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true
            state.error = action.error?.message

        })
    }
})

export default relatedVideosSlice.reducer