import './service-page.styles.css'
import { Link } from 'react-router-dom'

import { useParams } from "react-router-dom"
import { selectCompanyById } from "../../store/companies/companies.selector"
import { useSelector } from "react-redux"

const ServicePage = () => {
    const {companyId,serviceId} = useParams()

    const company = useSelector(state =>selectCompanyById(state,companyId))
    .services.find(service => service.sid === Number(serviceId))
    const {sid,name,monthlyCost,status} = company
    
    return (
        <div className="service-page-container"  key={sid}>
            <h3> Status: {status}</h3>
            <label className="service-page-property">Company name: {name}</label>
            <label> Monthly Cost: {monthlyCost} </label>
            <Link>Order Configuration</Link>
            <Link>Open Trouble Ticket</Link>
        </div>
    )
}

export default ServicePage