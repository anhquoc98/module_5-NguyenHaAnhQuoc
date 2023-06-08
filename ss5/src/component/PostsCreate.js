import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {save} from "../service/PostsService";
import {useNavigate} from "react-router";
import * as Yup from 'yup';
import slugify from "slugify";
import {NavLink} from "react-router-dom";



export function PostsCreate() {
    const currentDateTime = new Date().toLocaleString();
    let navigate = useNavigate()
    return (
        <div>
            <NavLink to='/'>List</NavLink>
            <Formik initialValues={{
                title: '',
                content: '',
                category: '',
                slug:'',
                updatedAt: currentDateTime
            }}
                    validationSchema={Yup.object({
                        title: Yup.string().required("input tittle"),
                        content: Yup.string().required("input tittle"),
                        category: Yup.string().required("input tittle")
                    })}
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
                        <ErrorMessage name='title'  className='errMes'/>
                    </div>
                    <div>
                        <label htmlFor="">content</label>
                        <Field type='text' name='content'/>
                        <ErrorMessage name='content'  className='errMes'/>

                    </div>
                    <div>
                        <label htmlFor="">category</label>
                        <Field type='text' name='category'/>
                        <ErrorMessage name='category'  className='errMes'/>

                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>

                </Form>
            </Formik>
        </div>
    );
}

export default PostsCreate;