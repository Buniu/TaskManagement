import { Link } from "react-router-dom"




const ShowCompanyServices = ({company}) => {
    const {services,id} = company
    return (
        <div>
            {services.map((service)=> {
                return (
                    <div key={service.sid} className="service-container">
                        <div> Service Status: {service.status}</div>
                        <Link to={`/customer-page/${id}/${service.sid}`}> Service Name: {service.name}</Link>

                    </div>
                )
            })}
        </div>
    )
}


export default ShowCompanyServices