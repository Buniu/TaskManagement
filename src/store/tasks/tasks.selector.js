import { createSelector } from "reselect"

export const selectTasksReducer = state => state.tasks



export const selectTasksArray = createSelector(
    [selectTasksReducer],
    (tasksSlice) => tasksSlice.tasks
)

export const selectNumberOfTasks = createSelector (
    [selectTasksArray],
    (tasks) => tasks.length
)


export const selectTaskBySID = createSelector (
    [selectTasksArray, (_,serviceId) => serviceId],
    (tasks, serviceId) => 
    {
        console.log(tasks)
        return tasks.filter((task) => Number(task.sid) === Number(serviceId))

    }


)

export const selectTaskByID = createSelector (
    [selectTasksArray, (_,taskId) => taskId],
    (tasks, taskId) => tasks.find((task) => Number(task.id) === Number(taskId)
))


