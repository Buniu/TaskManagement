import './createTaskPage.styles.css'
import { useParams} from "react-router-dom"
import { selectLoggedUser } from "../../store/users/users.selector"
import { selectCompanyBySid } from "../../store/companies/companies.selector"
import { selectNumberOfTasks, selectTasksArray } from '../../store/tasks/tasks.selector'
import { addTaskToRedux } from '../../store/tasks/tasks.action'
import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react'


const CreateTaskPage = () => {
    const loggedUser = useSelector(selectLoggedUser)
    const numberOfTasks = useSelector(selectNumberOfTasks)
    const tasksArray = useSelector(selectTasksArray)
    const dispatch = useDispatch()
    const {taskType,serviceSid} = useParams()
    const company = useSelector(state => selectCompanyBySid(state,serviceSid))
    const service = company.services.find(service => Number(service.sid) === Number(serviceSid))
    console.log(service)
    const [newTask,setNewTask] = useState({
        id: numberOfTasks,
        type: taskType,
        companyName: company.name,
        serviceName: service.name,
        assignedTechnician: 'DroplistTODO',
        creationDate: new Date(),
        status: 'Accepted',
        comments: [{
            id: 0,
            name: '',
            surname: '',
            date: new Date(),
            content: ''
        }],
        sid: serviceSid
    })

    


    const commentInputHandler = (event) => {
        const {value} = event.target
        const newComment = {
            id: 0,
            name: loggedUser.name,
            surname: loggedUser.surname,
            date: new Date(),
            content:value
        }
        setNewTask({...newTask, comments: [newComment]})
    }

    const submitAddTask = (event) => {
        event.preventDefault()
        dispatch(addTaskToRedux(tasksArray, {...newTask, id: numberOfTasks}))
        setNewTask({
            id: numberOfTasks,
            type: taskType,
            companyName: company.name,
            serviceName: service.name,
            assignedTechnician: 'DroplistTODO',
            creationDate: new Date(),
            status: 'Accepted',
            comments: [{
                id: 0,
                name: '',
                surname: '',
                date: new Date(),
                content: ''
            }],
            sid: serviceSid
        })
    }
    


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
                <input className='create-task-textfield' onChange={commentInputHandler} value={newTask.comments[0].content} />
            </div>
            <button onClick={submitAddTask}> Create Task</button>
        </div>
    )

}

export default CreateTaskPage