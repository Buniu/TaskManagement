import { createSelector } from "reselect"

export const selectCompaniesReducer = state => state.companies

export const selectCompaniesList = createSelector(
    [selectCompaniesReducer],
    (companiesSlice) => companiesSlice.companiesList
)

export const selectServicesSID = createSelector(
    [selectCompaniesReducer],
    (companiesSlice) => companiesSlice.servicesSID
)

export const selectCompaniesId = createSelector (
    [selectCompaniesReducer],
    (companiesSlice) => {
        if(companiesSlice.companiesList.length === 0) {
            return -1
        }else {
            return companiesSlice.companiesList.slice(-1)[0].id
        }
    }
)

export const selectCompanyById = createSelector (
    [selectCompaniesReducer, (_, companyId)=> companyId],
    (companiesSlice, companyId) => {
        console.log(companiesSlice)
        return companiesSlice.companiesList.find(company => company.id === Number(companyId))
    }
)

export const selectCompanyBySid = createSelector (
    [selectCompaniesReducer, (_, serviceSid) => serviceSid],
    (companiesSlice, serviceSid) => {
        const service = companiesSlice.companiesList.find (company =>  {
            const service = company.services.find(service => service.sid === Number(serviceSid)) 
            return service.sid ===Number(serviceSid)
        })
        return service
    }
)