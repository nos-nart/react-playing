import * as types from '../constants/ActionTypes'

export const add = task => ({
    type: types.ADD,
    task
})

export const remove = id => ({
    type: types.REMOVE,
    id
})

export const search = filter => ({
    type: types.SEARCH,
    filter
})

export const change_mssg = mssg => ({
    type: types.CHANGE_MSSG,
    mssg
})