import {$authHost} from "./index";

export const fetchEvents = async () => {
    const {data} = await $authHost.get('public/events')
    return data
}

export const fetchEvent = async (id) => {
    const {data} = await $authHost.get(`public/events/${id}`)
    return data
}

export const saveEvent = async (dto) => {
    const {data} = await $authHost.post('events', dto)
    return data
}

export const editEvent = async (id,dto) => {
    const {data} = await $authHost.put(`events/${id}`, dto)
    return data
}

export const deleteEvent = async (id) => {
    const {data} = await $authHost.delete(`events/${id}`)
    return data
}
