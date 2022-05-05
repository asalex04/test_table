import {configureStore} from "@reduxjs/toolkit";
import postReducer from './reducers/PostsSlice'

export const setupStore = () => configureStore({
    reducer: postReducer
})

export type RootState = ReturnType<typeof postReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
