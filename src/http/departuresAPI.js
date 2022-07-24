import {$authHost} from "./index";

export const fetchDepartures = async () => {
    const {data} = await $authHost.get('public/departures')
    return data
}

export const fetchDeparture = async (id) => {
    const {data} = await $authHost.get(`public/departures/${id}`)
    return data
}

export const saveDeparture = async (dto) => {
    const {data} = await $authHost.post('departures', dto)
    return data
}

export const editDeparture = async (id,dto) => {
    const {data} = await $authHost.put(`departures/${id}`, dto)
    return data
}

export const deleteDeparture = async (id) => {
    const {data} = await $authHost.delete(`departures/${id}`)
    return data
}
