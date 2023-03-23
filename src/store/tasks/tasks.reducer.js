import { TASKS_ACTION_TYPES } from "./tasks.types";




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
        case(TASKS_ACTION_TYPES.ADD_COMMENT): {
            const {taskId, comment} = payload
            const newTasksList = state.tasks.map((task)=> {
                if(Number(task.id) === Number(taskId)){
                    return {...task,comments: [...task.comments,comment]}
                }
                return task
            })
            return {...state,tasks: newTasksList}
        }
        case(TASKS_ACTION_TYPES.SET_ASSIGNEDTECHNICIAN): {
            const {taskId, technician} = payload
            const newTasksList = state.tasks.map((task)=> {
                if(Number(task.id) === Number(taskId)){
                    return {...task,assignedTechnician: technician}
                }
                return task
            })
            return {...state,tasks: newTasksList}
        }
    }
}

/*
Technician object {
    name:
    surname:
    id:
}
*/