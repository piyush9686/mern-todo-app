import axios from "axios"
const instance = axios.create({
    baseURL:"http://3.110.117.161:5000/api"
})

export default instance

