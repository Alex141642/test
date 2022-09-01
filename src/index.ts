import axios from 'axios'

export const hello = (who: string = 'world'): string => {
    return `Hello ${who}! `;
}

export const request = async (): Promise<string> => {
    return axios.get("http://127.0.0.1").then(response => response.data).catch(error => error.data)
}

export const my_func = (data: string = "default"): boolean => {
    if (data === "default") return true
    return false
}

