import { combineReducers } from 'redux'
import tasks from './tasks'
import message from './message'

const reducers = combineReducers({
    tasks,
    message
})

export default reducers