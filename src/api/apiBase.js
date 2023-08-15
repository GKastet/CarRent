import axios from "axios"

const baseURL = 'https://64c124d3fa35860baea00fb8.mockapi.io/'

export const instance = axios.create({
    baseURL,
})