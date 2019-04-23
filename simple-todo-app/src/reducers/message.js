import * as messages from '../constants/Message'
import * as types from '../constants/ActionTypes'

let initState = messages.MSG_WELCOME

let message = (state = initState, action) => {
    switch(action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state;
    }
}

export default message