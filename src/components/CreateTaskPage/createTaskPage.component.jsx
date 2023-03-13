import './createTaskPage.styles.css'
import { useParams} from "react-router-dom"
import { selectLoggedUser } from "../../store/users/users.selector"
import { selectCompanyBySid } from "../../store/companies/companies.selector"
import { selectNumberOfTasks, selectTasksArray } from '../../store/tasks/tasks.selector'
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'


const CreateTaskPage = () => {
    const loggedUser = useSelector(selectLoggedUser)
    const numberOfCompanies = useSelector(selectNumberOfTasks)
    const tasksArray = useSelector(selectTasksArray)
    const dispatch = useDispatch()
    const {taskType,serviceSid} = useParams()
    const company = useSelector(state => selectCompanyBySid(state,serviceSid))
    const [newTask,setNewTask] = useState({
        id: 0,
        type: '',
        status: '',
        comments: [{
            id: 0,
            name: '',
            surname: '',
            date: new Date(),
            content: ''
        }]
    
    })
    console.log(numberOfCompanies)

// after creation of task, set it status to active and forward page to task page


    return (
        <div className="create-task-page"> 
            <div className='create-task-creator'> 
                <label> {loggedUser.name} {loggedUser.surname} </label>
            </div>
                
            <div className='create-task-ticket-data'>
                <label> {taskType}</label>
                <label> {company.name}</label>
                <label> {company.services[serviceSid].name}</label>
                <input className='create-task-textfield' value={newTask.comments[0].content}> </input>
            </div>

        </div>
    )

}

export default CreateTaskPage