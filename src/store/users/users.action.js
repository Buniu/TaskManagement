import { USERS_ACTION_TYPES } from "./users.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setLoggedUser = (userToLogin) => {
    console.log(userToLogin)
    return createAction(USERS_ACTION_TYPES.SET_ACTIVE_USER,userToLogin)
}