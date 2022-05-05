import axios from "axios";
import {AppDispatch} from "../store";
import {postsFetching, postsFetchingSuccess, postsFetchingError, setCurrentItems} from "./PostsSlice";

export const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postsFetching())
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        dispatch(postsFetchingSuccess(response.data))
        dispatch(setCurrentItems(response.data.slice(0, 10)))
    } catch (e) {
        dispatch(postsFetchingError(e.message))
    }
}
