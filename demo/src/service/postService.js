import axios from "axios";

export const findByAll = async () => {
    try {
        return await axios.get(`http://localhost:8080/postBlog`)
    } catch (e) {
        console.log(e)
    }
}
export const findByName =async (name)=>{
    try {
        return await axios.get(`http://localhost:8080/postBlog?name_like=${name}&_sort=category&_order=asc`)
    }catch (e){
        console.log(e)
    }
}
export const findByAllCategory = async () => {
    try {
        return await axios.get(` http://localhost:8080/category`)
    } catch (e) {
        console.log(e)
    }
}

export const save = async (post) => {
    try {
        return await axios.post(`http://localhost:8080/postBlog`,{...post})
    } catch (e) {
        console.log(e)
    }
}

export const deleteFindById = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/postBlog/${id}`)
    } catch (e) {
        console.log(e)
    }
}
export const seachById = async (id) => {
    try {
       return  (await axios.get(`http://localhost:8080/postBlog/${id}`))
    } catch (e) {
        console.log(e)
    }
}

export const update=async (post)=>{
    try {
        await axios.put(`http://localhost:8080/postBlog/${post.id}`, { ...post })
    }catch (e){
        console.log(e)
    }
}