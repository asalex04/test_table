import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/useTypedSelector";
import PostList from "../components/PostList/PostList";
import {fetchPosts} from "../store/reducers/ActionCreators";

const PostPage = () => {
    const dispatch = useDispatch()
    const {currentItems, error, isLoading} = useAppSelector(state => state)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            {isLoading && <h1>...Loading</h1>}
            {error && <h1>{error}</h1>}
            <PostList props={currentItems}/>
        </div>
    );
};

export default PostPage;
