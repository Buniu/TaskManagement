import AddServiceForm from "../AddServiceForm/addServiceForm.component"


const ModifyCompany = ({company}) => {


    return (
        <div className="modify-company-container">
            <AddServiceForm company={company}/>
        </div>
    )
}

export default ModifyCompany