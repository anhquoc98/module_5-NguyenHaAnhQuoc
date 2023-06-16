import axios from 'axios';

export const findByAllType=async ()=>{
    try{
        const result = await axios.get("http://localhost:8080/type/product")
        return result.data
    }catch (e){
        console.log(e)
    }
}