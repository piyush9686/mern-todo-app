import axios from "axios"
const instance = axios.create({
    baseURL:"http://13.201.137.47:3000"
})
export default instance