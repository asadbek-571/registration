import {$authHost} from "./index";

export const fetchLeaderships = async () => {
    const {data} = await $authHost.get('public/leadership')
    return data
}

export const fetchLeadership = async (id) => {
    const {data} = await $authHost.get(`public/leadership/${id}`)
    return data
}

export const saveLeadership = async (dto) => {
    const {data} = await $authHost.post('leadership', dto)
    return data
}

export const editLeadership = async (id,dto) => {
    const {data} = await $authHost.put(`leadership/${id}`, dto)
    return data
}

export const deleteLeadership = async (id) => {
    const {data} = await $authHost.delete(`leadership/${id}`)
    return data
}
