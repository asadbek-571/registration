import {$authHost} from "./index";

export const fetchNews = async () => {
    const {data} = await $authHost.get('public/news')
    return data
}

export const fetchNew = async (id) => {
    const {data} = await $authHost.get(`public/news/${id}`)
    return data
}

export const saveNews = async (dto) => {
    const {data} = await $authHost.post('news', dto)
    return data
}

export const editNews = async (id,dto) => {
    const {data} = await $authHost.put(`news/${id}`, dto)
    return data
}

export const deleteNews = async (id) => {
    const {data} = await $authHost.delete(`news/${id}`)
    return data
}
