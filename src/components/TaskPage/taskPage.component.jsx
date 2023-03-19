import "./taskPage.styles.css"
import { useSelector } from "react-redux"
import { selectTasksArray } from "../../store/tasks/tasks.selector"


const TaskPage = () => {
    // const loggeduser = useSelector(selectLoggedUser)
    const tasksArray = useSelector(selectTasksArray)

    return (
        <div className='task-page-tasks'>
            <div className='task-page-label'>
                <label>ID:</label>
                <label>Type:</label>
                <label>Company Name:</label>
                <label>Service Name:</label>
                <label>Creation Date:</label>
            </div>
            {tasksArray.map(task => (
                <div key={task.id} className='task-page-task'>
                <label> {task.id}</label>
                <label> {task.type}</label>
                <label> {task.companyName} </label>
                <label>{task.serviceName} </label>
                <label> {task.creationDate.toLocaleString()} </label>
                 </div>
            ))}
        </div>
    )
}

export default TaskPage