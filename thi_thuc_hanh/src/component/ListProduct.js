import React, {useEffect, useState} from 'react';
import * as productService from "../service/productService"
import * as typeProductService from "../service/typeProductService";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

export function ListProduct() {
    const [products, setProducts] = useState([]);
    const [idUpdate,setUpdate]=useState([]);
    const [typeProducts, setTypeProduct] = useState([]);
    const listProduct = async () => {
        const list = await productService.findByAll();
        setProducts(list.data);
    }

    useEffect(() => {

        listProduct()
    }, [])

    useEffect(() => {
        const listTypeCustomer = async () => {
            const listType = await typeProductService.findByAll();
            setTypeProduct(listType.data);
        }
        listTypeCustomer()
    }, [])

    const [idRemove, setIdRemove] = useState()
    const handleTrasnferId = (id) => {
        setIdRemove(id)
    }

    function handleDelete() {
        try {
            productService.deleteProduct(idRemove)
            listProduct()
        } catch (error) {
            console.log(error)
        }
    }

    return (



        <div>
            <Link to={'/create'} className='btn btn-primary'>Thêm mới</Link>
            <Formik initialValues={{name: ''}} onSubmit={(values) => {
                console.log(values)
                const findByName = async () => {
                const byName = await productService.findByName(values.name)
                    setProducts(byName.data)
            }
                findByName()
            }
            }>
                <Form>
                    <Field type='text' name='name'/>
                    <button className='btn btn-primary'>Tìm kiếm</button>
                </Form>


            </Formik>

            <table className="table table-striped">
                <thead>
                <tr>
                    <td>Mã sản phẩm</td>
                    <td>Tên sản phẩm</td>
                    <td>Ngày nhập</td>
                    <td>Số lượng</td>
                    <td>Loại</td>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => (
                            <tr>
                                <th>{product.id}</th>
                                <th>{product.name}</th>
                                <th>{product.day}</th>
                                <th>{product.sl}</th>
                                <th>{typeProducts.filter((type) =>
                                    product.typeProduct === type.id
                                )[0]?.name}</th>
                                <th>
                                    <Link to={'/update'}  className='btn btn-primary' >Cập nhập</Link>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" onClick={() => handleTrasnferId(product.id)}>
                                        Xóa
                                    </button>
                                </th>
                            </tr>
                        )
                    )
                }
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
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => handleDelete()}>Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProduct;