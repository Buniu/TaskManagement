import { combineReducers } from "redux";
import { companiesReducer } from "./companies/companies.reducer";
import { tasksReducer } from "./tasks/tasks.reducer";

export const rootReducer = combineReducers({
    companies: companiesReducer,
    tasks: tasksReducer
})

