import axios from 'axios'
import config from './config/config'

/*export default axios.create({
    baseURL: config.apiURL
})*/


const instance = axios.create({})

instance.defaults.baseURL = config.apiURL

instance.interceptors.request.use(config => {
    console.log('Interceptando requisição: ', config)

    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    // config.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`  //token de autorização
    config.headers.common['Authorization'] = `Bearer token_jwt`  //token de autorização

    return config

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(config)
    //     }, 2000);
    // })
}, error => {
    console.log('Erro ao fazer requisição: ', error)
    return Promise.reject(error)
})

// instance.interceptors.response.use(response => {
//     console.log('Interceptando resposta: ', response)
//     if (Array.isArray(response.data)) {
//         response.data = response.data.slice(1, 3)
//     }
//     return response
// }, error => {
//     console.log('Erro capturado no interceptador de respostas: ', error)
//     return Promise.reject(error)
// })

export default instance