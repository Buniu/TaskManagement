import { USERS_ACTION_TYPES } from "./users.types"

const USERS_INITIAL_STATE = {
    users:  [
        {
           id:0,
           name: 'Norbert',
           surname: 'Satro',
           role: 'admin', // admin,supervisor,technician
           login: 'nsatro',
           password: '1'
        },
        {
           id:1,
           name: 'Ludwik',
           surname: 'Brychcy',
           role: 'supervisor',
           login: 'lbrychcy',
           password: 'lbrychcy123!'
        },
        {
           id:2,
           name: 'Arnold',
           surname: 'Kondracki',
           role: 'technician' ,
           login: 'akondracki',
           password: 'akondracki123!'
        },
        {
           id:3,
           name: 'Zaida',
           surname: 'Zybała',
           role: 'technician',
           login: 'zzybala',
           password: 'zzybala123!'
        },
        {
           id:4,
           name: 'Zwinisława',
           surname: 'Mosakowski',
           role: 'supervisor',
           login: 'zmosakowski',
           password: 'zmosakowski123!'
        },
        {
           id:5,
           name: 'Mieszko',
           surname: 'Olejarczyk',
           role: 'admin',
           login: 'molejarczyk',
           password: 'molejarczyk123!'
        },
        {
           id:6,
           name: 'Rut',
           surname: 'Bielewicz',
           role: 'supervisor',
           login: 'rbielewicz',
           password: 'rbielewicz123!'
        },
        {
           id:7,
           name: 'Zuzanna',
           surname: 'Orzoł',
           role: 'supervisor',
           login: 'zorzol',
           password: 'zorzol123!'
        },
        {
           id:8,
           name: 'testUser',
           surname: 'testUser',
           role: 'admin',
           login: 'test',
           password: 'test123!'
        },
    ],
    loggedUser: false
}

export const usersReducer = (state = USERS_INITIAL_STATE, action= {}) => {
    const {type,payload} = action
    switch(type) {
        case(USERS_ACTION_TYPES.SET_ACTIVE_USER):
        return {...state, loggedUser: payload}
        default:
            return state
    }
}