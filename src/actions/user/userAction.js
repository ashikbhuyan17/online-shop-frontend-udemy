import { LOGGED_IN_USER, LOGOUT } from './userActionTypes'

export const login = (data) => {
    return {
        type: LOGGED_IN_USER,
        payload: data
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: null
    }
}