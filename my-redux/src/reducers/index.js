import reducer from './reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    todosList : reducer
})
