import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import * as productService from "../service/productService";
import {useNavigate} from "react-router-dom";
import * as typeProductService from "../service/typeProductService";

function CreateProduct() {
    const navigate = useNavigate();
    const [productTypes, setProductTypes] = useState([])
    useEffect(() => {
        const findAll = async () => {
            const typeProduct = await typeProductService.findByAll();
            setProductTypes(typeProduct.data)
        }
        findAll()
    }, [])
    return (
        <div>
            <h1>Thêm mới danh sách</h1>
            <Formik initialValues={{
                name: '',
                title: '',
                code: '',
                productType:productTypes[0]?.id
            }} validationSchema={Yup.object({
                name: Yup.string().required('nhập tên ')
            })} onSubmit={(values => {
                const create=async ()=>{
                    await productService.create({
                        ...values,
                        productType: +values.productType
                    })
                    navigate('/')
                }
                create()
            })}>
                <Form>
                    <div>
                        <label htmlFor="">Nhập tên</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage name='name'></ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor="">loại</label>
                        <Field as='select' className='form-select' name='productType'>
                            {
                                productTypes.map((productType, index) => (
                                    <option key={index} value={productType.id}>
                                        {productType.nameType}
                                    </option>
                                ))
                            }
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="">nội dung</label>
                        <Field type='text' name='code'/>
                    </div>
                    <button type='submit'> add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateProduct;