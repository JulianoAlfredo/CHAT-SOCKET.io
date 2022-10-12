import axios from "axios"

const API = axios.create({
    baseURL: "http://192.168.0.13:3002"
})

export default API



/*
import axios from "axios"

const API = axios.create({
        baseURL: "http://localhost:3001"
    })

export default API
*/