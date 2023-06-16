import React, {useEffect, useState} from 'react';
import * as productService from "../service/productService";
// import * as typeService from "../service/typeService";
import {NavLink} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as typeService from "../service/typeService";

export function ProductList() {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await productService.findByAll();
            console.log(rs)
            setListProduct(rs)
        }
        list()
    }, [])


    const [listProductType, setListProductType] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await typeService.findByAllType();
            setListProductType(rs)
        }
        list()
    }, [])
    const [idDelete, setIdDelete] = useState(null)

    function handleGetId(id) {
        setIdDelete(id)
    }

    async function handleDelete() {
        await productService.remove(idDelete)
         let rs= await productService.findByAll();
        setListProduct(rs)
    }

    return (
        <div>
            <NavLink to='/create' className='btn btn-primary'>Thêm mới</NavLink>
            <Formik initialValues={{
                nameProduct: '',
                typeProduct: ''
            }} onSubmit={(values) => {
                const search = async () => {
                    let rs = await productService.findByName(values.nameProduct, values.typeProduct)
                    setListProduct(rs.data)
                }
                search()
            }
            }>
                <Form>
                    <Field name='nameProduct' id='nameProduct'/>
                    <Field component="select" name='typeProduct'>
                        {
                            listProductType.map((value, index) => (
                                <option key={index} id={value.id}>
                                    {value.nameType}
                                </option>
                            ))
                        }
                    </Field>
                    <button type='search' className='btn btn-primary'>tìm kiếm</button>
                </Form>
            </Formik>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">stt</th>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Thể loại</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                </tr>
                </thead>
                <tbody>
                {listProduct.map((value, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.codeProduct}</td>
                        <td>{value.nameProduct}</td>
                        <td>{value.typeProduct.name}</td>
                        <td>{value.quantity}</td>
                        <td>{value.price}</td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => handleGetId(value.id)}>
                                Xóa
                            </button>
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
                            {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>handleDelete()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;