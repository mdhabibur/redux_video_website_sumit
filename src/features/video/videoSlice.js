import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import videoAPI from "./videoAPI"


const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ""
}

//thunk action creation for async task
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await videoAPI(id)
    return video

})


const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchVideo.pending, (state,action) => {
            state.isLoading = true
            state.isError = false
            state.error = ""

        })
        .addCase(fetchVideo.fulfilled, (state,action) => {
            state.isLoading = false 
            state.isError = false
            state.error = ""
            state.video = action.payload

        })
        .addCase(fetchVideo.rejected, (state,action) => {
            state.isLoading = false 
            state.isError = true
            state.error = action.error?.message

        })
    }
})

export default videoSlice.reducer