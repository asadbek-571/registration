import {$authHost} from "./index";

export const fetchDepartments = async () => {
    const {data} = await $authHost.get('public/departments')
    return data
}

export const fetchDepartment = async (id) => {
    const {data} = await $authHost.get(`public/departments/${id}`)
    return data
}

export const saveDepartment = async (dto) => {
    const {data} = await $authHost.post('departments', dto)
    return data
}

export const editDepartment = async (id,dto) => {
    const {data} = await $authHost.put(`departments/${id}`, dto)
    return data
}

export const deleteDepartment = async (id) => {
    const {data} = await $authHost.delete(`departments/${id}`)
    return data
}
