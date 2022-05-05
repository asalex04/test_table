import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks/useTypedSelector";
import styles from "./pagination.module.css";
import {useDispatch} from "react-redux";
import {setCurrentItems, setCurrentPage} from "../../store/reducers/PostsSlice";

const Pagination = () => {
    const {itemsPerPage, currentPage, posts} = useAppSelector(state => state)
    const dispatch = useDispatch()
    const pages = []

    for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
        pages.push(i)
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem)

    useEffect(() => {
        dispatch(setCurrentItems(currentItems))
    }, [currentPage])

    const moveForward = () => {
        if (currentPage < itemsPerPage) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    const moveBack = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    return (
        <div className={styles.wraper}>
            <div onClick={() => moveBack()}>Назад</div>
            <div className={styles.pageNumbers}>
                {pages.map(page => (
                    <li key={page}
                        className={currentPage === page ? styles.currentPage : ""}
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </li>
                ))}
            </div>
            <div onClick={() => moveForward()}>Далее</div>
        </div>

    );
};

export default Pagination;
