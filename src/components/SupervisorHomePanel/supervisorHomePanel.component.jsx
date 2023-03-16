import AddCompanyForm from "../AddCompanyForm/addCompanyForm.component"

const SupervisorHomePanel = ({loggedUser}) => {
    
    return (
        <div className="supervisor-panel-container">
            <div> Supervisor home panel</div>
            <AddCompanyForm/>
            
        </div>
    )
}

export default SupervisorHomePanel