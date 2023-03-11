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
                return <AdminHomePanel/>
            case(userTypes.supervisor):
                return <SupervisorHomePanel/>
            case(userTypes.technician):
                return <TechnicianHomePanel/>
            default:
                return <div>something went wrong</div>
            }
        }
            

    return (
        <div> 
         {isUserLoggedIn ? renderComponentByUserType() :
            <div>To show user module you need to log in</div> 
            }

        </div>
    )
}


export default Home