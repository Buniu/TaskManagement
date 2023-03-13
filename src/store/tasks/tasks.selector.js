import { createSelector } from "reselect"

export const selectTasksReducer = state => state.tasks

export const selectTasksArray = createSelector(
    [selectTasksReducer],
    (tasksSlice) => tasksSlice.tasks
)

export const selectNumberOfTasks = createSelector (
    [selectTasksReducer],
    (tasksSlice) => tasksSlice.tasks.length
)