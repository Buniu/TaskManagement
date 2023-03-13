import { TASKS_ACTION_TYPES } from "./tasks.types";


const taskObjectPrototype = {
    id: 0,
    type: '',
    status: '',
    comments: [{
        id: 0,
        name: '',
        surname: '',
        date: new Date(),
        content: ''
    }]

}




const TASKS_INITIAL_STATE = {
    tasks: [],
    tasksArchive: [],
    
}

export const tasksReducer = (state = TASKS_INITIAL_STATE, action= {}) => {
    const {type,payload} = action
    switch(type) {
        case(TASKS_ACTION_TYPES.SET_TASKS):
        return {...state, tasks: payload}
        default:
            return state
    }
}