import axios from "axios";

export const findByAll = () => {
    try {
        return axios.get('http://localhost:8080/typeProduct')
    } catch (error) {
        console.log(error)
    }
}