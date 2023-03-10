import { Link } from "react-router-dom"


import { selectLoggedUser } from "../../store/users/users.selector"
import { useSelector } from "react-redux"

import SupervisorHomePanel from "../supervisor-home-panel/supervisor-home-panel.component"
import AdminHomePanel from "../admin-home-panel/admin-home-panel.component"
import TechnicianHomePanel from "../technician-home-panel/technician-home-panel.component"

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

    return (
        <div> 
         {isUserLoggedIn ? renderComponentByUserType() :
            <div>To show user module you need to log in</div> 
            }
            <Link to={`/task-center/createTask/${testString}/${testValue}`}>Test routing</Link>
        </div>
    )
}


export default Home