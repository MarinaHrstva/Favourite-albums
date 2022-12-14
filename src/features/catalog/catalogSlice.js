import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
    const res =await  axios.get('https://jsonplaceholder.typicode.com/photos')
      return res.data.splice(0,5)
})

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCatalog.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCatalog.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchCatalog.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default catalogSlice.reducer

