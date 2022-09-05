import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    albums: []
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {

    }
})


export default catalogSlice.reducer
export const { } = catalogSlice.actions
