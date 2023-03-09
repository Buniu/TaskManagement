import { createAction } from "../../utils/reducer/reducer.utils";
import { TASKS_ACTION_TYPES } from "./tasks.types";

export const addTaskToRedux = (tasks,taskToAdd) => {
    const newTasksArray = [...tasks,taskToAdd]
    createAction(TASKS_ACTION_TYPES.SET_TASKS, newTasksArray)
}