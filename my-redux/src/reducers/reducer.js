import {getTodos, todosError} from '../actions/types'

const initial = {
    todos:[],
    loading:true
}
const reducer = (state = initial, action) => {

    switch(action.type){
        case getTodos:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case todosError :
            return {
                loading: false,
                error: action.payload
            }
        default:   return state    
    }
}

export default reducer