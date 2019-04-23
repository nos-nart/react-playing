import { combineReducers } from 'redux'
import message from './message'
import todo from './todo'

const reducers = combineReducers({
    message,
    todo
})

export default reducers