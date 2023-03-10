import { combineReducers } from "redux";
import { companiesReducer } from "./companies/companies.reducer";
import { tasksReducer } from "./tasks/tasks.reducer";
import { usersReducer } from "./users/users.reducer";

export const rootReducer = combineReducers({
    companies: companiesReducer,
    tasks: tasksReducer,
    users:  usersReducer,
})

