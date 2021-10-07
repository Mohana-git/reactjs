import userReducer from './userReducer'
import counterReducer from './counterReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    userReducer,
    counterReducer
})

export default rootReducer