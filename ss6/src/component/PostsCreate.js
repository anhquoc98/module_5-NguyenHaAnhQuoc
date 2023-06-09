import React from 'react';
import {useNavigate} from "react-router";
import {Field, Form, Formik} from "formik";
import * as PostsService from "../service/PostsService";

function PostsCreate() {
    let navigate = useNavigate();
    return (
        <div>
            <Formik initialValues={{
                title: '',
                slug: '',
                category: '',
                thumbnail_url: ''
            }}
                    onSubmit={async (value) => {
                        await PostsService.save(value)
                        alert("thêm thành công")
                        navigate('/')
                    }
                    }>
                <Form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field type='text' name='title'/>
                    </div>
                    <div>
                        <label htmlFor="slug">slug</label>
                        <Field type='text' name='slug'/>
                    </div>
                    <div>
                        <label htmlFor="category">category</label>
                        <Field type='text' name='category'/>
                    </div>
                    <div>
                        <label htmlFor="thumbnail_url">thumbnail_url</label>
                        <Field type='text' name='thumbnail_url'/>
                    </div>
                    <button type='submit'>add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default PostsCreate;