import axios from 'axios';

export const findByAll=async ()=>{
    try{
        const result = await axios.get("http://localhost:8080/home/product")
        return result.data
    }catch (e){
        console.log(e)
    }
}

export const findByName=async (nameProduct,typeProduct)=>{
    try{
        return await axios.get(`http://localhost:8080/product?nameProduct_like=${nameProduct}&typeProduct_like=${typeProduct}`)
    }catch (e){
        console.log(e)
    }
}

export const remove=async (id)=>{
    try{
        return await axios.delete(`http://localhost:8080/home/${id}`)
    }catch (e){
        console.log(e)
    }
}


export const save = async (product) => {
    try {
       return  await axios.post('http://localhost:8080/product', {...product})
    } catch (e) {
        console.log(e)
    }
}
