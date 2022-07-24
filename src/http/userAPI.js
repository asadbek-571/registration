import {$authHost, $host} from "./index";

export const login = async (username, password) => {
    const {data} = await $host.post('public/auth/login', {username, password})
    localStorage.setItem('accessToken', data.data.accessToken)
    localStorage.setItem('refreshToken', data.data.refreshToken)
    localStorage.setItem('expireTime', data.data.expireTime)
    return data
}

export const refresh = async ({accessToken, refreshToken}) => {
    const {data} = await $host.post('public/auth/refresh-token', {accessToken, refreshToken})
    localStorage.setItem('accessToken', data.data.accessToken)
    localStorage.setItem('refreshToken', data.data.refreshToken)
    localStorage.setItem('expireTime', data.data.expireTime)
}



export const fetchPermissions = async () => {
    const {data} = await $authHost.get('user/permissions')
    return data
}
