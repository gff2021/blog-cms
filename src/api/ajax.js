/* 对axios进行二次封装 */
import axios from 'axios';

export default {
    getParams: (url, data) => {
        return axios.get(url, {
            params: data
        })
    },
    postJson: (url, data) => {
        return axios.post(url, data)
    }
}