import axios from 'axios'

const apiCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/', // 1001 e 1002
})

export default apiCep
