import axios from 'axios'

let req=axios.create({
    baseURL:'http://localhost:3000',
    // baseURL:'http://192.168.1.5:3000',
    timeout:10000,
})
export function getdata(){
    return req.get('/api/seller')
}

export function getgoods(){
    return req.get('/api/goods')
    
}
export function evaluate(){
    return req.get('api/ratings')
    
}