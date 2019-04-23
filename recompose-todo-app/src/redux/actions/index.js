import * as types from '../constants/ActionTypes'

export const add = task => ({
    type: types.ADD,
    task
})

export const remove = id => ({
    type: types.DELETE,
    id
})

export const search = fil => ({
    type: types.SEARCH,
    fil
})

export const changeMessage = mssg => ({
    type: types.CHANGE_MESSAGE,
    mssg
})