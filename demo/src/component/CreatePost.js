import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import * as postService from "../service/postService";
import {useNavigate} from "react-router-dom";

function CreatePost() {
    let nanigate = useNavigate()
    const [listPostCateGory, setListPostCateGory] = useState([])

    useEffect(() => {
        const listCategory = async () => {
            let rs = await postService.findByAllCategory()
            setListPostCateGory(rs.data)
        }
        listCategory()
    }, [])
    return (
        <div>
            <h1>Thêm mới danh sách</h1>
            <Formik initialValues={{
                name: '',
                title: '',
                category: 1

            }}
                    onSubmit={async (values) => {
                        await postService.save(values)
                        alert('thêm mới thành công')
                        nanigate('/')
                    }
                    }
            >
                <Form>
                    <div>
                        <label className='m-lg-2'>Tên</label>
                        <Field type='text' name='name'/>
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

export default CreatePost;