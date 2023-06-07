import React, {useEffect, useState} from 'react';
import {findAll, remove} from "../service/PostsService";
import {Link, NavLink} from "react-router-dom";
import {useNavigate} from "react-router";

export function PostsList() {

    const [postsList, setPostsList] = useState([]);
    const [idDelete, setIdDelete] = useState(null)
    useEffect(() => {
        const getAll = async () => {
            let result = await findAll();
            setPostsList(result.data)
        }
        getAll()
    }, [])

    function handleDelete(id) {
        setIdDelete(id)
    }

    async function deletePost() {
        await remove(idDelete)
        let rs = await findAll();
        setPostsList(rs.data)

    }

    return (
        <div>
            <NavLink to='/create'>Create</NavLink>
            <table className='table table-danger'>
                <thead>
                <tr className='table-dark'>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Updated At</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    postsList.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.updatedAt}</td>
                            <td>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" onClick={() => handleDelete(value.id)}>
                                    Delete
                                </button>
                                <Link to={`/edit/${value.id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {/*modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Delete {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deletePost}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostsList;