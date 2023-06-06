import React, {useState} from 'react';
import {posts} from "./Data";
import {CreatePosts} from "./CreatePosts";

export function ListPosts() {
    const [useList, setUseList] = useState(posts);
    const [id, setId] = useState(null);
    const [title, setTitle] = useState(null);
    const [category, setCategory] = useState(null);
    const [content, setContent] = useState(null);

    function handleDelete(id) {
        const newList = useList.filter((value) => value.id !== id);
        setUseList(newList);
    }

    const getPops = (id, title, category, content) => {
        setId(id);
        setTitle(title);
        setCategory(category);
        setContent(content);
    };

    function handleEdit() {
        id:getPops(id);
        setTitle(title);
        setCategory(category);
        setContent(content);
    }

    return (
        <div>
            <CreatePosts setUseList={setUseList}/>
            <div className='d-flex justify-content-center align-items-center'>
                <h1>List Posts</h1>
            </div>
            <table className='table table-primary'>
                <thead className='table-dark'>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>CONTENT</th>
                    <th>SLUG</th>
                    <th>DATE</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
                <tbody>
                {useList.map((value, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.title}</td>
                        <td>{value.category}</td>
                        <td>{value.content}</td>
                        <td>{value.slug}</td>
                        <td>{value.updatedAt}</td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                onClick={() => getPops(value.id, value.title)}
                            >
                                Delete
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1" data-bs-whatever="@fat"
                                    onClick={() => getPops(value.id, value.title,value.category,value.content)}>Edit
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">...</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {title} bạn muốn xóa theo {id}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger"
                                    onClick={() => handleDelete(id)}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Modal Edit*/}

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <form >
                                <div >
                                    <input type="text" placeholder="title" name="title" value={title}/>
                                </div>

                                <div>
                                    <input type="text" placeholder="category" name="category" value={category}/>
                                </div>
                                <div>
                                    <input type="text" placeholder="content" name="content" value={content}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onSubmit={handleEdit}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default ListPosts;
