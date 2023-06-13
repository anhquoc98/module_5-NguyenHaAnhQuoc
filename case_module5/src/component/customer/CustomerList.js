import React, {useEffect, useState} from 'react';
import * as customerService from "./customerService";
import {NavLink} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function CustomerList() {
    const [listCustomer, setListCustomer] = useState([])
    const [listCustomerType, setListCustomerType] = useState([])
    useEffect(() => {
        const list = async () => {
            let rs = await customerService.findAll()
            setListCustomer(rs.data)
        }
        list()
    }, []);

    useEffect(() => {
        const list = async () => {
            let rs = await customerService.findAllType()
            setListCustomerType(rs.data)
        }
        list()
    }, [])

    return (
        <div>
            <Header/>
            <NavLink to={'/createCustomer'} className='btn btn-primary m-lg-2'>Thêm mới</NavLink>
            <table className='table table-primary'>
                <thead className='table-danger'>
                <tr>
                    <th>id</th>
                    <th>họ và tên</th>
                    <th>giới tính</th>
                    <th>ngày sinh</th>
                    <th>cmnd</th>
                    <th>số điện thoại</th>
                    <th>email</th>
                    <th>loại khách</th>
                    <th>địa chỉ</th>
                </tr>
                </thead>
                <tbody>
                {
                    listCustomer.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.gender == "1" ? 'nam' : 'nữ'}</td>
                            <td>{value.dateOfBirth}</td>
                            <td>{value.cmnd}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                            <td>{listCustomerType.filter(ct=>ct.id===value.customerType)[0]?.name}</td>
                            <td>{value.address}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default CustomerList;