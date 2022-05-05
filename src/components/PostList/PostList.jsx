import React from 'react';
import {Table} from 'react-bootstrap'
import styles from './postList.module.css'
import Pagination from "../Pagination/Pagination";
import useSortableData from "../../hooks/useSortableData";
import Search from "../Search/Search";
import {useAppSelector} from "../../hooks/useTypedSelector";

const PostList = ({props}) => {
    const { items, requestSort} = useSortableData(props)
    const {value} = useAppSelector(state => state)

    let filteredItems = items.filter(item => item.body.includes(value) || item.title.includes(value));

    return (
        <div>
            <Search />
            <Table className="table table-bordered">
                <thead className={styles.head}>
                <tr>
                    <th className={styles.sign} onClick={() => requestSort('id')}>ID</th>
                    <th className={styles.sign} onClick={() => requestSort('title')}>Заголовок</th>
                    <th className={styles.sign} onClick={() => requestSort('body')}>Описание</th>
                </tr>
                </thead>
                <tbody>
                {filteredItems.map(post => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
          <Pagination />
        </div>
    );
};

export default PostList;
