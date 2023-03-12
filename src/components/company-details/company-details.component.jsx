

const CompanyDetails = ({company}) => {
    const {id,name,address,nip,supervisor} = company
    return (
        <div className="list-companies-company-element"  key={id}> 
        <label className="list-companies-company-property">Company name: {name}</label>
        <label className="list-companies-company-property">Company Address: {address}</label>
        <label className="list-companies-company-property">NIP: {nip}</label>
        <label className="list-companies-company-property">Supervisor: {supervisor.name} {supervisor.surname} </label>
    </div>
    )
}

export default CompanyDetails