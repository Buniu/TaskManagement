import { createAction } from "../../utils/reducer/reducer.utils";
import { TASKS_ACTION_TYPES } from "./tasks.types";

export const addTaskToRedux = (tasks,taskToAdd) => {
    const newTasksArray = [...tasks,taskToAdd]
    return createAction(TASKS_ACTION_TYPES.SET_TASKS, newTasksArray)
}

export const addCommentToTask = (taskId,comment) => {
    return createAction(TASKS_ACTION_TYPES.ADD_COMMENT, {taskId,comment})
}

export const assignTechnicianToTask = (taskId, technician) => {
    return createAction(TASKS_ACTION_TYPES.SET_ASSIGNEDTECHNICIAN, {taskId, technician})
}