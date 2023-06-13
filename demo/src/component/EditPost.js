import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as postService from "../service/postService";
import {useNavigate, useParams} from "react-router";

export function EditPost() {

    let navigate = useNavigate()
    const [listPostCateGory, setListPostCateGory] = useState([])
    const [findById, setFindById] = useState(null);
    let param = useParams();

    useEffect(() => {
        const getId = async () => {
            let rs = await postService.seachById(param.id)
            setFindById(rs.data)
        }
        getId()
    }, [param.id])

    useEffect(() => {
        const listCategory = async () => {
            let rs = await postService.findByAllCategory()
            setListPostCateGory(rs.data)
        }
        listCategory()
    }, [])
    if (!findById) {
        return null
    }
    return (
        <div>
            <h1>Thêm mới danh sách</h1>
            <Formik initialValues={{
                id:findById?.id,
                name: findById?.name,
                title: findById?.title,
                category: findById?.category

            }}
                    onSubmit={(values) => {
                        const edit = async () => {
                            await postService.update(values)
                            debugger
                            alert('thay đổi thành công')
                            navigate('/')
                        }
                        edit()
                    }
                    }
            >
                <Form>
                    <Field type='hidden' name='id'/>
                    <div>
                        <label className='m-lg-2'>Tên</label>
                        <Field type='text' name='name' id='name'/>
                    </div>

                    <div>
                        <label className='m-lg-2'>nội dung</label>
                        <Field type='text' name='title'/>
                    </div>
                    <div>
                        <label className='m-lg-2'>loại</label>
                        <Field component='select' name='category'>
                            {
                                listPostCateGory.map((value, index) => (
                                    <option key={index} value={value.id}>
                                        {value.name}
                                    </option>
                                ))
                            }
                        </Field>
                    </div>
                    <button type='submit'>chấp nhận</button>
                </Form>
            </Formik>
        </div>
    );
}

export default EditPost;