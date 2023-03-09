import { COMPANIES_ACTION_TYPES } from "./companies.types"

const INITIAL_ARRAY = [
    {"id":0,
    "name":"Agata",
    "nip":"3375706276",
    "address":"Dąbrowa Górnicza ul. Korczaka Janusza 95",
    "supervisor":"",
    "services":[]
    },
    {
    "id":1,"name":"Januszeks",
    "nip":"7589360937",
    "address":"Jaworzno ul. Brzozowa 125",
    "supervisor":"",
    "services":[]
    },{
    "id":2,
    "name":"Kremuwkojad",
    "nip":"4972455316",
    "address":"Olsztyn ul. Żurawskiego Stanisława 124",
    "supervisor":"",
    "services":[]
    },{
    "id":3,
    "name":"Kasztany S.A",
    "nip":"9524392806",
    "address":"Kielce ul. Kordeckiego Augustyna 116",
    "supervisor":"",
    "services":[]
    }]

const COMPANIES_INITIAL_STATE = {
    companiesList: INITIAL_ARRAY,
    servicesSID: 0,
}


export const companiesReducer = (state = COMPANIES_INITIAL_STATE, action = {}) => {
    const {type,payload} = action

    switch(type) {
        case(COMPANIES_ACTION_TYPES.SET_COMPANIES) :
            return {...state, companiesList:payload}
        case(COMPANIES_ACTION_TYPES.ADD_SERVICE) : 
        {
            const {id, newService} = payload
            const servicesSID = state.servicesSID
            const newCompaniesList = state.companiesList.map((item,index)=> {
                if(index === id) {
                    return {
                        ...item,
                        services : [...item.services, newService]
                    }
                }
                return item
            })
            console.log(servicesSID)
            return {...state, companiesList:newCompaniesList,servicesSID: servicesSID+1}
        }

        default:
            return state
    }

}