import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    currentItems: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    itemsPerPage: 10,
    value: ''
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
        },
        postsFetchingSuccess(state, action: PayloadAction) {
            state.error = ''
            state.isLoading = false
            state.posts = action.payload
        },
        postsFetchingError(state, action:PayloadAction) {
            state.isLoading = false
            state.error = action.payload
        },
        setCurrentPage(state, action: PayloadAction) {
            state.currentPage = action.payload
        },
        setCurrentItems(state, action: PayloadAction) {
            state.currentItems = action.payload
        },
        setValue(state, action: PayloadAction) {
            state.value = action.payload
        },
    }
})
export default postSlice.reducer
export const {postsFetching, postsFetchingError, postsFetchingSuccess,
    setCurrentPage, setCurrentItems, setValue} = postSlice.actions
