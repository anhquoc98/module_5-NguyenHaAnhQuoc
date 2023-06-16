import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as productService from "../service/productService";
import * as typeService from "../service/typeService";
import * as Yup from "yup";

export function ProductCreate() {

    let navigate = useNavigate();

    const [listProductType, setListProductType] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await typeService.findByAllType();
            setListProductType(rs.data)
        }
        list()
    }, [])
    return (
        <div>
            <Formik initialValues={{
                idProduct: '',
                nameProduct: '',
                typeProduct: 1,
                quantity: '',
                price: '',
                date: '',
                moTa:''
            }}
                    validationSchema={Yup.object({
                        idProduct: Yup.string().required('Nhập id'),
                        nameProduct: Yup.string().required('Nhập tên'),
                        quantity: Yup.number().required('Nhập số lượng').min(1,'lớn hơn 0'),
                        price: Yup.number().required('Nhập giá'),

                    })}
                    onSubmit={async (values) => {
                        await productService.save(values);
                        console.log(values)
                        alert('thêm mới thành công')
                        navigate('/')
                    }
            }>
                <Form>
                    <div>
                        <label htmlFor="exampleFormControlInput1">Mã sản phẩm</label>
                        <Field type="text" name='idProduct'
                        />
                        <ErrorMessage name='idProduct' className='err'/>
                    </div>

                    <div><label htmlFor="exampleFormControlInput1">Tên sản phẩm</label>
                        <Field type="text" name='nameProduct'
                        />
                        <ErrorMessage name='nameProduct' className='err'/></div>

                    <div>
                        <label htmlFor="exampleFormControlInput1">Thể loại</label>
                        <Field component="select" name='typeProduct'>
                            {
                                listProductType.map((value, index) => (
                                    <option key={index} id={value.id} value={value.id}>
                                        {value.nameType}
                                    </option>
                                ))
                            }
                        </Field>

                    </div>

                    <div>
                        <label htmlFor="exampleFormControlInput1">Số lượng</label>
                        <Field type="text" name='quantity'
                        />
                        <ErrorMessage name='quantity' className='err'/>
                    </div>

                    <div>
                        <label htmlFor="exampleFormControlInput1">Giá </label>
                        <Field type="text" name='price'
                        />
                        <ErrorMessage name='price'className='err'/>
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlInput1">Ngày nhập sản phẩm</label>
                        <Field type="date" name='date'
                               placeholder="name@example.com"/>
                    </div>
                    <div>
                        <label htmlFor="exampleFormControlInput1">Mô tả</label>
                        <Field type="text" name='moTa'/>
                    </div>
                    <button type='submit'>Thêm mới</button>
                </Form>
            </Formik>
        </div>
    );
}

export default ProductCreate;