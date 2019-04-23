import * as types from '../constants/ActionTypes'
import * as messages from '../constants/Messages'

let initState = messages.MSSG_SALUTE 

let message = (state = initState, action) => {
    let {mssg} = action
    switch(action.type){
        case types.CHANGE_MESSAGE: {
            state = mssg
            return state
        } default: {
            return state
        }
    }
}

export default message