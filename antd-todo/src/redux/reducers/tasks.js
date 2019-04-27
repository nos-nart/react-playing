import * as types from '../constants/ActionTypes'

let data = JSON.parse(localStorage.getItem('tasks'))

console.log(data)

let initState = data ? data : []

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

const tasks = (state = initState, action) => {
    let {task, filter, id} = action
    console.log(task)
    switch(action.type) {
        case types.ADD: {
            localStorage.setItem('tasks', JSON.stringify([...state, {id: uuidv4(), name: task}]))
            return [...state, {id: uuidv4(), name: task}]
        }
        case types.REMOVE: {
            localStorage.setItem('tasks', JSON.stringify(state.filter(item => !(item.id === id))))
            return (state.filter((item) => !(item.id === id)))
        }
        case types.SEARCH: {
            return (state.filter((item) => (item.includes(filter))))
        }
        default: {
            return state
        }
    }
}

export default tasks