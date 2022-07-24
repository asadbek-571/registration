import {$authHost} from "./index";

export const fetchFaculties = async () => {
    const {data} = await $authHost.get('public/faculties')
    return data
}

export const fetchFaculty = async (id) => {
    const {data} = await $authHost.get(`public/faculties/${id}`)
    return data
}

export const saveFaculty = async (dto) => {
    const {data} = await $authHost.post('faculties', dto)
    return data
}

export const editFaculty = async (id,dto) => {
    const {data} = await $authHost.put(`faculties/${id}`, dto)
    return data
}

export const deleteFaculty = async (id) => {
    const {data} = await $authHost.delete(`faculties/${id}`)
    return data
}
