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
    (companies, companyId) => {
        console.log(companies)
        return companies.companiesList.find(company => company.id === Number(companyId))
    }
)