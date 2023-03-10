import { createSelector } from "reselect";


export const selectUsersReducer= state => state.users

export const selectUsersArray = createSelector(
    [selectUsersReducer],
    (usersSlice) => usersSlice.users
)

export const selectLoggedUser = createSelector(
    [selectUsersReducer],
    (usersSlice) => usersSlice.loggedUser
)