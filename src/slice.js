import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (search) => {
   
   const {data}  = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=b1ab851e`)
   
    return data.Search
})

const initialState = {
    movieLists: {
        isLoading: false,
        data: [],
        error: {}
    }
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.movieLists.data = action.payload
            state.movieLists.isLoading = false
        })
        builder.addCase(fetchMovies.pending, (state) => {
            state.movieLists.isLoading = true
        })
        builder.addCase(fetchMovies.rejected, (state, payload) => {
            state.movieLists.isLoading = false
            state.movieLists.error = {
                message: payload.error.message
            }
        })
    }
})

export default movieSlice.reducer