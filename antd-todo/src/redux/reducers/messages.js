import * as types from '../constants/ActionTypes'
import * as messages from '../constants/Messages'

let initState = messages.MSSG_WELCOME

export default function(state = initState, action) {
    let { mssg } = action
    switch(action.type) {
        case types.CHANGE_MSSG: {
            state = mssg
            return state
        }
        default: {
            return state
        }
    }
}