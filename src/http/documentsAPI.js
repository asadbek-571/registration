import {$authHost} from "./index";

export const fetchDocuments = async () => {
    const {data} = await $authHost.get('public/documents')
    return data
}

export const fetchDocument = async (id) => {
    const {data} = await $authHost.get(`public/documents/${id}`)
    return data
}

export const saveDocument = async (dto) => {
    const {data} = await $authHost.post('documents', dto)
    return data
}

export const editDocument = async (id,dto) => {
    const {data} = await $authHost.put(`documents/${id}`, dto)
    return data
}

export const deleteDocument = async (id) => {
    const {data} = await $authHost.delete(`documents/${id}`)
    return data
}
