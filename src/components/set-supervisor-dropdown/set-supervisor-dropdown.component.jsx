import { useSelector } from "react-redux"
import { useState } from "react"
import { selectCompaniesList } from "../../store/companies/companies.selector"
import { selectUsersArray } from "../../store/users/users.selector"
import { addSupervisorToCompany } from "../../store/companies/companies.action"
import { useDispatch } from "react-redux"

const SetSupervisorDropdown = () => {
    const companies = useSelector(selectCompaniesList)
    const usersArray = useSelector(selectUsersArray)
    const dispatch = useDispatch()
    const [selectedCompany,setSelectedCompany] = useState({supervisor:''})
    const [selectedEmployee,setSelectedEmployee] = useState({})
    const setCompanyStateHandler = (event) => {
        const companyId = event.target.value
        const selectedCompany = companies.find(company => company.id === Number(companyId))
        setSelectedCompany(selectedCompany)
    }

    const setEmployeeStateHandler = (event) => {
        const employeeId = event.target.value
        const selectedEmployee = usersArray.find(user => user.id === Number(employeeId))
        setSelectedEmployee(selectedEmployee)
    }

    const changeSupervisorHandler = () => {
        dispatch(addSupervisorToCompany(selectedEmployee,selectedCompany.id))
    }
    const isCompanyHaveSupervisor = Object.keys(selectedCompany.supervisor).length === 0 ? false : true

    return (
        <div>
            <label htmlFor='companies-dropdown'>Select Company to set supervisor </label>
            <select id='companies-dropdown' value={selectedCompany.id} onChange={setCompanyStateHandler}>
                <option value=''>--Please choose company-- </option>
                {companies.map(company => <option key={company.id} value={company.id}> {company.name} </option>)}
                           
            </select>

            <label>Select person to be that company supervisor</label>
            <select value={selectedEmployee.id} onChange={setEmployeeStateHandler}>
                <option value=''> --Please choose employee--</option>
                {usersArray.filter(user=> user.role === 'supervisor')
                .map(user => <option key={user.id} value={user.id}> {user.name} {user.surname}  </option> )}
            </select>
            <button onClick={changeSupervisorHandler}>Change Supervisor</button>
            {isCompanyHaveSupervisor ? <label> This company already have supervisor!</label> : null}
        </div>
    )
}


export default SetSupervisorDropdown