import axios from "axios"

export default defineNuxtPlugin(async () => {
    const instance = axios.create({
        baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || ''
    });

    return {
        provide: {
            axios: instance
        }
    }
})