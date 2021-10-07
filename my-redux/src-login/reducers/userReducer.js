
const userReducer = (state = {}, action) => {

    switch(action.type){
        case "setuser":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "logout":
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state    
    }
}

export default userReducer