/**
 * 接口域名的管理
 */
const api = {
    debug: {
        host: 'http://172.16.10.80:8083/api'
    },
    development: {
        host: 'http://10.10.10.170:8083/api'
    },
    production: {
        host: 'http://fjjf.laozicloud.com/api/api'
    }
}
const base = api[process.env.VUE_APP_ENV]

export default base;