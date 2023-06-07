import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {findById, update} from "../service/PostsService";
import {useNavigate, useParams} from "react-router";

export function PostsCreate() {
    let navigate = useNavigate()
    let param=useParams()
    const [byId,setFindById]=useState(null)

    useEffect(()=>{
        const getId =async ()=>{
            const rs = await findById(param.id)
            setFindById(rs.data)
        }
        getId()
    },[param.id])
    if (!byId){
        return null
    }


    return (
        <div>
            <Formik initialValues={{
                id:byId.id,
                title:byId.title,
                content: byId.content,
                category: byId.category,
                updatedAt: byId.updatedAt,
            }}
                    onSubmit={(values) => {
                        const create = async () => {
                            await update(values)
                            alert('thành công')
                            navigate('/')
                        }
                        create()
                    }
                    }>
                <Form>
                    <Field type='hidden' name='id'/>
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