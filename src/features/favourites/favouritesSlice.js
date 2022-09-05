import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favorites: []
}

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action) => {
            state.favorites.unshift(action.payload)
        },
        remove: (state, action) => {
            state.favorites.filter(x=>x.id!=action.payload.id)
        }

    }
});

export default favouritesSlice.reducer
export const { add, remove } = favouritesSlice.actions