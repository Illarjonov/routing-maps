import axios from "axios"

const apiURL = 'http://localhost:4000'

const instance = axios.default.create({
    baseURL: apiURL,
    headers: {
        Accept: 'application/json',
    },
})

export const API = {
    async fetchData() {
        try {
            const req = instance.get('/data')
            return req
        } catch (error) {
            console.log(error.response)
        }
    },
}