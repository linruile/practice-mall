import axios from "axios";

export function request(config){
    //1,创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 10000
    });

    //请求拦截
    //请求拦截的作用
    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    },error => {
        console.log(error);
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res);
        //响应拦截之后必须释放数据
        return res.data
    },error => {
        console.log(error);
    })
    return instance(config);
}