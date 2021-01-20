import axios from 'axios'

const swagger = axios.create({
    baseURL: 'http://192.168.15.33:1001', // 1001 e 1002
})

export default swagger



