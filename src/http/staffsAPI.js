import {$authHost} from "./index";

export const fetchStaffs = async () => {
    const {data} = await $authHost.get('public/staffs')
    return data
}

export const fetchStaff = async (id) => {
    const {data} = await $authHost.get(`public/staffs/${id}`)
    return data
}

export const saveStaff = async (dto) => {
    const {data} = await $authHost.post('staffs', dto)
    return data
}

export const editStaff = async (id,dto) => {
    const {data} = await $authHost.put(`staffs/${id}`, dto)
    return data
}

export const deleteStaff = async (id) => {
    const {data} = await $authHost.delete(`staffs/${id}`)
    return data
}
