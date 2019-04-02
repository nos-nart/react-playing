import { combineReducers } from 'redux'
import tasks from './tasks'
import message from './message'
import search from './search'

const reducers = combineReducers({
    tasks,
    message,
    search
})

export default reducers