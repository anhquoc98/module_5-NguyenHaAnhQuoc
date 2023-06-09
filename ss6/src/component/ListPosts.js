import React, {useEffect, useState} from 'react';
import {listFindAll} from "../service/PostsService";
import {NavLink} from "react-router-dom";

function ListPosts() {

    const [postList, setPostList] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let rs = await listFindAll();
            console.log(rs)
            setPostList(rs.data)
        }
        getAll()
    }, [])
    return (
        <div>
            <NavLink to="/create" className='btn btn-dark'>Create</NavLink>
            <table className="table table-primary">
                <thead className="table-danger">
                <tr>
                    <th>id</th>
                    <th>category</th>
                    <th>title</th>
                    <th>thumbnail_url</th>
                    <th>slug</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    postList.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.thumbnail_url}</td>
                            <td>{value.slug}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListPosts;