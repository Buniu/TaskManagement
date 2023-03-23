import "./taskPage.styles.css"
import { useSelector } from "react-redux"
import { selectTasksArray } from "../../store/tasks/tasks.selector"
import { Link } from "react-router-dom"


const TaskPage = () => {
    // const loggeduser = useSelector(selectLoggedUser)
    const tasksArray = useSelector(selectTasksArray)

    const linkHandler = (id) => {

    }

    return (

        tasksArray.length === 0 ? <div>No tasks to show,change filters (TODO) or add any.</div> 
        : 
        <div className='task-page-tasks'>
            <div className='task-page-labels'>
                <label>ID:</label>
                <label>Type:</label>
                <label>Company Name:</label>
                <label>Service Name:</label>
                <label>Creation Date:</label>
                <label>Enter Task</label>
            </div>
            {tasksArray.map(task => (
                <div key={task.id} className='task-page-task'>
                    <label> {task.id}</label>
                    <label> {task.type}</label>
                    <label> {task.companyName} </label>
                    <label>{task.serviceName} </label>
                    <label> {task.creationDate.toLocaleString()} </label>
                    <Link to={`/task-center/taskId/${task.id}`}> 	&#9744; </Link>
                 </div>
            ))}
        </div>
    )
}

export default TaskPage