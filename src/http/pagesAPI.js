import {$authHost} from "./index";

export const fetchPages = async () => {
    const {data} = await $authHost.get('public/pages')
    return data
}

export const savePage = async (dto) => {
    const {data} = await $authHost.post('pages', dto)
    return data
}

export const fetchPage = async (id) => {
    const {data} = await $authHost.get(`public/pages/${id}`)
    return data
}

export const editPage = async (id,dto) => {
    const {data} = await $authHost.put(`pages/${id}`, dto)
    return data
}

export const deletePage = async (id) => {
    const {data} = await $authHost.delete(`pages/${id}`)
    return data
}
