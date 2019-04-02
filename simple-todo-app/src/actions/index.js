import * as types from '../constants/ActionTypes'

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const add = (task) => {
    return {
        type: types.ADD,
        task
    }
}

export const remove = (id) => {
    return {
        type: types.DELETE,
        id
    }
}


export const changeMessage = message => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}

export const search = fil => {
    return {
        type: types.SEARCH,
        fil
    }
}
