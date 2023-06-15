import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as productService from "../service/productService";
import * as Yup from "yup";
import * as typeProductService from "../service/typeProductService";

function CreateProduct() {
    let navigate = useNavigate()
    const [listProductType,setListProductType]=useState([])


    useEffect(()=>{
        const list = async ()=>{
            let rs = await typeProductService.findByAll()
            setListProductType(rs.data)
        }
        list()
    },[])
    return (
        <div>
            <Formik initialValues={{
                codeProduct: '',
                nameProduct: '',
                price: '',
                typeProduct: 1,
                date: ''
            }}
                    validationSchema={Yup.object({
                        codeProduct:Yup.string().required("nhập mã sản phẩm"),
                        nameProduct:Yup.string().required("nhập tên"),
                        price:Yup.number().required("Nhập số"),
                        // date:Yup.number().required("chọn ngày"),

                    })
                    }
                    onSubmit={
                        async (values) => {
                            await productService.save(values)
                            alert('Thêm mới thành công')
                            navigate('/')
                        }
                    }
            >
                <Form>
                    <div>
                        <label>mã sản phẩm</label>
                        <Field type='text' name='codeProduct' className='form-control'/>
                        <ErrorMessage name='codeProduct'/>
                    </div>
                    <div>
                        <label>Tên sảng phẩm</label>
                        <Field type='text' name='nameProduct' className='form-control'/>
                        <ErrorMessage name='nameProduct'/>
                    </div>
                    <div>
                        <label>Giá sản phẩm</label>
                        <Field type='text' name='price' className='form-control'/>
                        <ErrorMessage name='price'/>
                    </div>
                    <div>
                        <Field component='select' name='typeProduct' className='form-control'>
                            {listProductType.map((value,index)=>(
                                <option key={index} value={value.id} name='typeProduct'>
                                    {value.name}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label>Ngày sản xuất</label>
                        <Field type='date' name='date' className='form-control'/>
                        <ErrorMessage name='date'/>
                    </div>
                    <button type='submit'>Đồng ý</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateProduct;