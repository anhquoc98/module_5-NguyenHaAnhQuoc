import React from 'react';
import {posts} from "./data";

export function Posts() {
    return (
        <div >
            <table className='table table-danger '>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITTLE</th>
                    <th>CATEGORY</th>
                    <th>TIME</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                    {posts.map((item,index) =>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.category}</td>
                            <td>{item.updatedAt}</td>
                            <td>
                                <button type="button" className="btn btn-danger" data-toggle="modal"
                                        data-target="#deleteModal">
                                    delete
                                </button>
                                <button className='btn btn-primary m-lg-2 w-49'>edit</button>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default Posts;