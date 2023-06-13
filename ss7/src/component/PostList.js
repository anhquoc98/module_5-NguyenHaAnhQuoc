import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/action';
import {NavLink} from "react-router-dom";

function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    if (!posts) {
        return null;
    }

    return (

        <div>

            <h1>Post List</h1>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>slug</th>
                    <th>category</th>
                    <th>Thumbnail URL</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.slug}</td>
                            <td>{value.category}</td>
                            <td>{value.thubnailURl}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default PostList;