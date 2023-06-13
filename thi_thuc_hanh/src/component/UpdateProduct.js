import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as typeProductService from "../service/typeProductService";

export function UpdateProduct(){
    const [typeProducts, setTypeProduct] = useState([]);
    useEffect(() => {
        const listTypeCustomer = async () => {
            const listType = await typeProductService.findByAll();
            setTypeProduct(listType.data);
        }
        listTypeCustomer()
    }, [])
return(
    <div>
        <h1>Cập nhập sản phẩm</h1>
        <Formik initialValues={{
            name:'',
            day:'',
            sl:'',

        }}>
            <Form>
                <Field type='text' name='name'/>

            </Form>
        </Formik>
    </div>
)
}