import {API_URL} from './config'

export const login = async (data: {email: string}) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data),
    });
    if (response.status !== 200) {
        throw new Error('Error during the login process')
    }
}

export const authenticate = async (data: {
    email: string, 
    emailToken: string
}) => {
    const response = await fetch(`${API_URL}/auth/authenticate`, {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data),
    });
    if (response.status !== 200) {
        throw new Error('Error during the login process')
    }
    return response.json()
}