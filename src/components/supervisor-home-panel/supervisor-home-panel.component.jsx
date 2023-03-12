import AddCompanyForm from "../add-company-form/add-company-form.component"

const SupervisorHomePanel = ({loggedUser}) => {
    
    return (
        <div className="supervisor-panel-container">
            <div> Supervisor home panel</div>
            <AddCompanyForm/>
            
        </div>
    )
}

export default SupervisorHomePanel