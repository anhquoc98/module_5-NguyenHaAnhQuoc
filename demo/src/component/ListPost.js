import React, {useEffect, useState} from 'react';
import * as postService from "../service/postService";
import {Link, NavLink} from "react-router-dom";
import {deleteFindById, findByAll} from "../service/postService";
import {Field, Form, Formik} from "formik";

export function ListPost() {
    const [listPost, setListPost] = useState([])
    const [listPostCateGory, setListPostCateGory] = useState([])
    const [idDelete, setIdDelete] = useState([])

    useEffect(() => {
        const list = async () => {
            let rs = await postService.findByAll()
            setListPost(rs.data)
        }
        list()
    }, [])

    useEffect(() => {
        const listCategory = async () => {
            let rs = await postService.findByAllCategory()
            setListPostCateGory(rs.data)
        }
        listCategory()
    }, [])

    function handleIdDelete(id) {
        setIdDelete(id)
    }

    async function handleDelete() {
        await deleteFindById(idDelete);
        alert('xóa thành công')
        let rs = await findByAll()
        setListPost(rs.data)
    }

    return (
        <div>
            <Formik initialValues={{
                name: ''
            }}
                    onSubmit={(values) => {
                        const byName = async () => {
                            let rs = await postService.findByName(values.name)
                            setListPost(rs.data)
                        }
                        byName()
                    }
                    }>
                <Form>
                    <Field type='text' name='name'/>
                    <button type='submit'>tìm kiếm</button>
                </Form>
            </Formik>
            <NavLink to={'/create'} className='btn btn-primary'>Thêm mới</NavLink>
            <table className='table table-primary'>
                <thead className='table-danger'>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>title</td>
                    <td>category</td>
                    <td>action</td>
                </tr>
                </thead>
                <tbody>
                {listPost.map((value, index) => (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.title}</td>
                        <td>{listPostCateGory.filter(lc => lc.id == value.category)[0]?.name}</td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => handleIdDelete(value.id)}>
                                Xóa
                            </button>
                            <Link to={`/edit/${value.id}`} className='btn btn-primary'>Sửa</Link>
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
                            Xóa {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => handleDelete()}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPost;