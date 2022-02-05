/* 封装接口函数 */
import ajax from './ajax';

const baseURL = '/admin';

// 发送登陆请求
export const reqLogin = (params) => {
    return new Promise((resolve, reject) => {
        ajax.postJson(baseURL + '/login', params).then(() => {
            resolve({
                data: {id: '01', username: 'gff'}
            })
        })
    });
}  

