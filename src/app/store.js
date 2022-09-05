import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../features/favourites/favouritesSlice'
import catalogReducer from '../features/catalog/catalogSlice';


const store = configureStore({
    reducer: {
        favourites: favouritesReducer,
        catalog: catalogReducer
    }
})

export default store;