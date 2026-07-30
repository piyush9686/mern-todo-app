import axios from "axios"
const instance = axios.create({
    baseURL:"http://13.205.255.86:5000/api"
})

export default instance

