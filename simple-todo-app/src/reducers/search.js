import * as types from '../constants/ActionTypes'

let initState = ''

let search = (state = initState, action) => {
    let {fil} = action
    switch(action.type) {
        case types.SEARCH: {
            return state.filter(item => !(item.name === fil))
        }
        default:
            return state
    }
}

export default search