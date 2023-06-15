import axios from 'axios';

export const findByAll = async () => {
    try {
        return await axios.get(`http://localhost:8080/product?_sort=price&_order=desc`);
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const findByName = async (nameProduct,typeProduct) => {
    try {
        return (await axios.get(`http://localhost:8080/product?nameProduct_like=${nameProduct}&typeProduct_like=${typeProduct}`))
    } catch (e) {
        console.log(e);
        return null;
    }
};

export const save = async (product) => {
    try {
        await axios.post(`http://localhost:8080/product`, {...product});
    } catch (e) {
        console.log(e);
    }
};

export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/product/${id}`);
    } catch (e) {
        console.log(e);
    }
};
