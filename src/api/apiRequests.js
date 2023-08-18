import { instance } from "./apiBase"

export const getApiCarsCatalog = async () => {
    const {data} = await instance.get('carrental')    
    return data
}

export const getCarsPerPage = async (page=1) => {    
    const {data} = await instance.get('carrental', {params: {
        page: page,
        limit: 8
    }})
    console.log(data);
    return data
}