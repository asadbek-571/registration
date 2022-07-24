import {$authHost} from "./index";

export const fetchNumbers = async () => {
    const {data} = await $authHost.get('public/numbers')
    return data
}

export const fetchNumber = async (id) => {
    const {data} = await $authHost.get(`public/numbers/${id}`)
    return data
}

export const saveNumber = async (dto) => {
    const {data} = await $authHost.post('numbers', dto)
    return data
}

export const editNumber = async (id,dto) => {
    const {data} = await $authHost.put(`numbers/${id}`, dto)
    return data
}

export const deleteNumber = async (id) => {
    const {data} = await $authHost.delete(`numbers/${id}`)
    return data
}
