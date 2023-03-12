import { selectLoggedUser } from "../../store/users/users.selector"
import { useSelector } from "react-redux"


const TaskPage = () => {
    const loggeduser = useSelector(selectLoggedUser)

    return (
        <div>
            There will be listed all tasks with filter options
        </div>
    )
}

export default TaskPage