import React from 'react';
import styles from './search.module.css'
import {useDispatch} from "react-redux";
import {setValue} from "../../store/reducers/PostsSlice";

const Search = () => {
    const dispatch = useDispatch()

    return (
        <form action="#" className={styles.form}>
            <div className={styles.customInput}>
                <input
                    type="text"
                    placeholder='Поиск'
                    onChange={e => dispatch(setValue(e.target.value))}
                />
            </div>
        </form>
    );
};

export default Search;
