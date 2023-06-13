import axios from "axios";



export const findByAll = () => {
    try {
        return axios.get('http://localhost:8080/product?_sort=sl&_order=asc')
    } catch (error) {
        console.log(error)
    }
}

export const findByName = (name) => {
    try {
        return axios.get(`http://localhost:8080/product?name_like=${name}&_sort=sl&_order=asc`)
    } catch (error) {
        console.log(error)
    }
}

export const findById=(id)=>{
    try {
        return axios.get(`http://localhost:8080/product?id=${id}`)
    }catch (error){
        console.log(error)
    }
}

export const create=(books)=>{
    try{
        return axios.post('http://localhost:8080/product',books)
    }catch (error){
        console.log(error)
    }
}
export const deleteProduct=(id)=>{
    try {
        return axios.delete(`http://localhost:8080/product/${id}`)
    }catch (error){
        console.log(error)
    }
}