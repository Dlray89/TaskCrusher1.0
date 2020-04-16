const AUTH_TOKEN = "auth-token"


//return token
export const getToken = () => localStorage.getItem(AUTH_TOKEN)
//update token
export const setToken = token => localStorage.setItem(AUTH_TOKEN, token)
//removes token
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN)