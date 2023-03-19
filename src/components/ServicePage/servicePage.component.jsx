import './servicePage.styles.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { selectCompanyById } from "../../store/companies/companies.selector"
import { selectTaskBySID } from '../../store/tasks/tasks.selector'

const ServicePage = () => {
    const {companyId,serviceId} = useParams()
    const [showActiveTasks, setShowActiveTasks] = useState(false)
    const tasksListBySID = useSelector(state => selectTaskBySID(state,serviceId))

    const company = useSelector(state =>selectCompanyById(state,companyId))
    .services.find(service => service.sid === Number(serviceId))
    const {sid,name,monthlyCost,status} = company

    const taskTypes = {
        configuration: 'configuration',
        troubleTicket: 'troubleTicket',
    }

    const showActiveTaskHandler = () => {
        setShowActiveTasks(!showActiveTasks)
    }
    const activeTasksButtonLabel = {
        true: 'hide active tasks',
        false: 'show active tasks'
    }
    console.log(tasksListBySID)


    
    return (
        <div className="service-page-container"  key={sid}>
            <h3> Status: {status}</h3>
            <label className="service-page-property">Company name: {name}</label>
            <label> Monthly Cost: {monthlyCost} </label>
            <Link to={`/task-center/createTask/${taskTypes.configuration}/${serviceId}`}>Order Configuration</Link>
            <Link>Open Trouble Ticket</Link>
            <button onClick={showActiveTaskHandler}> {activeTasksButtonLabel[showActiveTasks]} </button>
            {showActiveTasks ? tasksListBySID.map((task)=> <div key={task.id}>
                <div>Type: {task.type}</div>
                <div>Creation Date:{task.creationDate.toLocaleString()}</div>
                <div>TODO routing i Link do uslugi</div>
            </div>) 
            : null}
        </div>
    )
}

export default ServicePage