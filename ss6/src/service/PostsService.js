import axios from "axios";

export const listFindAll = async () => {
    try {
        let rs =await axios.get('http://localhost:8000/data')
        return rs;
    } catch (e) {
        console.log(e)
    }
}
export const save = async (post)=>{
    try {
        await axios.post('http://localhost:8000/data',{...post})
    }catch (e){
        console.log(e)
    }
}