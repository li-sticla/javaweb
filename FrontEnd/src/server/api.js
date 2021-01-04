// 接口列表
import axios from './http.js'
const serve = {
    getUser(){        
        return axios('/api/toutiao/index', {
            method: 'get',
            params: {"key": "b97ad518db98988c4eb08fc85d736fee"}
        })
    },
    register(dat){
        return axios('api/post/login',{//提交注册信息
            method: 'post',
            data: dat
        })
    },
    login(dat){
        return axios('api/post/login',{//用户登录校验
            method: 'post',
            data: dat
        })
    }
}

export default serve