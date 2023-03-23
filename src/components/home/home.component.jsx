import { persistor } from "../../store/store"

import { selectLoggedUser } from "../../store/users/users.selector"
import { useSelector } from "react-redux"

import SupervisorHomePanel from "../SupervisorHomePanel/supervisorHomePanel.component"
import AdminHomePanel from "../AdminHomePanel/adminHomePanel.component"
import TechnicianHomePanel from "../TechnicianHomePanel/technicianHomePanel.component"

const Home = () => {
    const loggedUser = useSelector(selectLoggedUser)
    const userRole = loggedUser.role
    const isUserLoggedIn = Object.keys(loggedUser).length === 0 ? false : true

    const userTypes = {
        admin: 'admin',
        supervisor: 'supervisor',
        technician: 'technician'
    }
    const renderComponentByUserType = () => {
        switch(userRole) {
            case(userTypes.admin):
                return <AdminHomePanel loggedUser={loggedUser}/>
            case(userTypes.supervisor):
                return <SupervisorHomePanel loggedUser={loggedUser}/>
            case(userTypes.technician):
                return <TechnicianHomePanel loggedUser={loggedUser}/>
            default:
                return <div>something went wrong</div>
            }
        }
            

        const testValue = '1'
        const testString = 'configuration'

        const emergencyButtonHandler = () => {
            persistor.purge()
        }

    return (
        <div> 
         {isUserLoggedIn ? renderComponentByUserType() :
            <div>To show user module you need to log in</div> 
            }
            <button onClick={emergencyButtonHandler}> emergency persist delete</button>

        </div>
    )
}


export default Home