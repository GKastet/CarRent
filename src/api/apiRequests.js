import { instance } from "./apiBase"

export const getApiCarsCatalog = async () => {
    const {data} = await instance.get('carrental')    
    return data
} 