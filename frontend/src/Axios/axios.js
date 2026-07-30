import axios from "axios"
const instance = axios.create({
    baseURL:"http://13.201.137.47:5000/api"
})

export default instance

