import { createAction } from "../../utils/reducer/reducer.utils"
import { COMPANIES_ACTION_TYPES } from "./companies.types"

export const addCompanyToRedux = (companies, companyToAdd) => {
        const newCompanyArray = [...companies,companyToAdd]


        return createAction(COMPANIES_ACTION_TYPES.SET_COMPANIES,newCompanyArray)   
}

export const addServiceToCompany = (id, newService) => {
        return createAction(COMPANIES_ACTION_TYPES.ADD_SERVICE, {id,newService})
}