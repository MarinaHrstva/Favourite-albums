import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favourites: []
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            state.favourites.unshift(action.payload)
        },
        remove: (state, action) => {
            state.favourites = state.favourites.filter(x => x.id != action.payload)
        }

    }
});

export default favouritesSlice.reducer
export const { add, remove } = favouritesSlice.actions