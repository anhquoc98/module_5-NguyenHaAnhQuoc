import React, {useEffect, useState} from 'react';
import * as productService from "../service/productService";
import * as typeProductService from "../service/typeProductService";
import {NavLink} from "react-router-dom";
import {findByAll} from "../service/productService";
import {Field, Form, Formik} from "formik";

export function ListProduct() {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await productService.findByAll()
            setListProduct(rs.data)
        }
        list()
    }, [])
    const [listProductType, setListProductType] = useState([])


    useEffect(() => {
        const list = async () => {
            let rs = await typeProductService.findByAll()
            setListProductType(rs.data)
        }
        list()
    }, [])


    const [idDelete, setIdDelete] = useState(null)

    function getIdDelete(id) {
        setIdDelete(id)

    }

    async function hanldDelete() {
        await productService.deleteProduct(idDelete)
        let rs = await findByAll()

        setListProduct(rs.data)
    }

    // if (!idDelete){
    //     return null
    // }

    return (
        <div>
            <NavLink to='/create' className='btn btn-primary'>Thêm mới</NavLink>
            <Formik initialValues={{
                nameProduct: '',
                typeProduct:''
            }}
                    onSubmit={(values) => {
                        const seach = async () => {
                            let rs = await productService.findByName(values.nameProduct,values.typeProduct)
                            setListProduct(rs.data)
                            console.log(listProduct)
                        }
                        seach()
                    }
                    }><Form>
                <Field id='name' name='nameProduct'/>
                <Field component='select' id='typeProduct' name='typeProduct'>
                    {
                        listProductType?.map((value, index) => (
                        <option key={index} value={value.id}>
                            {value.name}
                        </option>
                    ))}
                </Field>
                <button type='search'>Tìm kiếm</button>
            </Form>

            </Formik>

            <table className='table table-striped'>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Mã sản phẩm</td>
                    <td>Tên sản phẩm</td>
                    <td>Giá sản phẩm</td>
                    <td>Loại sản phẩm</td>
                    <td>Ngày sản xuất</td>
                </tr>
                </thead>
                <tbody>
                {listProduct?.map((value, index) => (
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.codeProduct}</td>
                        <td>{value.nameProduct}</td>
                        <td>{value.price}</td>
                        <td>
                            {listProductType.filter(pt => pt.id === value.typeProduct)[0]?.name}
                        </td>
                        <td>{value.date}</td>
                        <td>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => getIdDelete(value.id)}>
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
                            Xóa theo id {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={() => hanldDelete()}
                                    data-bs-dismiss="modal">Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListProduct;