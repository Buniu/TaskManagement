import AddServiceForm from "../add-service-form/add-service-form.component"


const ModifyCompany = ({company}) => {


    return (
        <div className="modify-company-container">
            <AddServiceForm company={company}/>
        </div>
    )
}

export default ModifyCompany