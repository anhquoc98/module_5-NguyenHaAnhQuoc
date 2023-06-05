import React from 'react';
import {posts} from "./data";

export function Posts() {
    return (
        <div>
            <table className='table table-striped'>
                <thead className='table-dark'>
                <tr>
                    <th>ID</th>
                    <th>TITTLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                {posts.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.updatedAt}</td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                delete
                            </button>
                            <button className='btn btn-primary m-lg-2 w-49'>edit</button>
                        </td>

                    </tr>
                ))}

                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Posts;