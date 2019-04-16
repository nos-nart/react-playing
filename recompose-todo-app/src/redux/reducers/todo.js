import * as types from '../constants/ActionTypes'


let data = JSON.parse(localStorage.getItem('todos'))
let initState = data ? data : []

let uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
}

let todos = (state = initState, action) => {
    let {task, id, fil} = action
    switch(action.type){
        case types.ADD: {
            let newTask = {
                id: uuidv4(),
                name: task
            }
            return {
                ...state, 
                newTask
            }
        }
        default: {
            return state;
        }
    }
} 

export default todos