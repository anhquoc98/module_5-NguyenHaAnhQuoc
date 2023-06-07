import React from 'react';
import {Field, Form, Formik} from "formik";
import {save} from "../service/PostsService";
import {useNavigate} from "react-router";

export function PostsCreate() {
    let navigate = useNavigate()
    return (
        <div>
            <Formik initialValues={{
                title: '',
                content: '',
                category: '',
                updatedAt: '',
            }}
                    onSubmit={(values) => {
                        const create = async () => {
                            await save(values)
                            alert('thành công')
                            navigate('/')
                        }
                        create()
                    }
                    }>
                <Form>
                    <div>
                        <label htmlFor="">Title</label>
                        <Field type='text' name='title'/>
                    </div>
                    <div>
                        <label htmlFor="">content</label>
                        <Field type='text' name='content'/>
                    </div>
                    <div>
                        <label htmlFor="">category</label>
                        <Field type='text' name='category'/>
                    </div>
                    <div>
                        <label htmlFor="updatedAt">updateAt</label>
                        <Field type='text' name='updatedAt'/>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>

                </Form>
            </Formik>
        </div>
    );
}

export default PostsCreate;