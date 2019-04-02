import * as types from '../constants/ActionTypes'

let uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
}

let data = JSON.parse(localStorage.getItem('todo'))

let initState = data ? data : []

let tasks = (state = initState, action) => {
    let {task, id} = action
    switch(action.type) {
        case types.LIST_ALL:
            return state
        case types.ADD: {
            let newTask = {
                id: uuidv4(),
                name: task
            }
            state.push(newTask);
            localStorage.setItem('todo', JSON.stringify(state))
            return state
        }
        case types.DELETE: {
            let newState = state.filter(item => !(item.id === id));
            localStorage.set('todo', JSON.stringify(newState))
            return newState;
        }
        default:
            return state;
    }
}

export default tasks