import axios from 'axios';
import {getTodos, todosError} from './types'

export const getTodo = () => async dispatch => {

try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch ({
        type: getTodos,
        payload: res.data
    })
}
catch(error) {
    dispatch ({
    type: todosError,
    payload: error
    })
}  
   
}
