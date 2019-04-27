import { combineReducers } from 'redux'
import tasks from './tasks'
import messages from './messages'

export default combineReducers({
    tasks,
    messages
})