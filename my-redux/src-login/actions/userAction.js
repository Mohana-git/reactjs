export const setUser = (userInfo) =>{
    return {
        type: "setuser",
        payload: userInfo
    }
}

export const logout = () =>{
    return {
        type: "logout"
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setUser , 
    logout }