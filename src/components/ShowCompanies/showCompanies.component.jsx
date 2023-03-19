import { selectCompaniesList } from "../../store/companies/companies.selector"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import "./showCompanies.styles.css"

const ShowCompanies = () => {

    const companiesList = useSelector(selectCompaniesList)
    return (


            <div className="list-companies">
            {companiesList.map(({id,name,address,nip}) => {
                //to={`/customer-page/${id}`} more explicit method
                //to={id.toString()} more implicit
                return (
                    <div className="list-companies-company-element"  key={id}> 
                    <Link to={id.toString()} className="list-companies-company-property">Company name: {name}</Link>
                    <label className="list-companies-company-property">Company Address: {address}</label>
                    <label className="list-companies-company-property">NIP: {nip}</label>
                    </div>
                )
            })}
            </div>
    )
}

export default ShowCompanies