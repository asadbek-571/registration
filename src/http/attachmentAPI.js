import {$authHost} from "./index";

export const upload = async (dto)=>{
    const {data} = await $authHost.post(`attachment/upload`, dto)
    return data
}

export const deleteImage = async (id)=>{
    const {data} = await $authHost.delete(`attachment/${id}`)
    return data
}