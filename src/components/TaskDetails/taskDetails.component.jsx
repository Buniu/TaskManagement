import './taskDetails.styles.css'
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'
import AddCommentForm from '../AddCommentForm/addCommentForm.component'
import { selectTaskByID } from "../../store/tasks/tasks.selector"
import { selectUsersArray } from '../../store/users/users.selector'
import { assignTechnicianToTask } from '../../store/tasks/tasks.action'
import { useDispatch } from 'react-redux'

const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };


const TaskDetails = () => {
    const {taskId} = useParams()
    const dispatch = useDispatch()
    const task = useSelector(state => selectTaskByID(state,taskId))
    const users = useSelector(selectUsersArray).filter((user)=> user.role!=='supervisor')
    const [showDropdown, setShowDropdown] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(()=> {
        const handler = () => setShowDropdown(false)

        window.addEventListener("click",handler)
        return () => window.removeEventListener("click",handler)
    })
    

    const handleInputClick = (event) => {
        event.stopPropagation()
        setShowDropdown(!showDropdown)
    }

    const dropdownDisplay = () => {
        if(selectedUser)
            return `${selectedUser.name} ${selectedUser.surname}`
        return 'Select Employee'
    }

    const onUserClick = (user) => {
        setSelectedUser(user)
    }

    const isSelected = (user) => {
        if(!selectedUser) 
            return false
        return selectedUser.id === user.id
    }

    const changeAssignedTechnicianToTask = () => {

        dispatch(assignTechnicianToTask(taskId, {
            id: selectedUser.id,
            name: selectedUser.name,
            surname: selectedUser.surname
        }))
    }

    return (
        <div className="task-details-container">
            <div className='task-details-assignedtechnician'>
                <label> Assigned Technician: {task.assignedTechnician.name} {task.assignedTechnician.surname}</label>
            </div>

            <div className='dropdown-container'>
                <div onClick={handleInputClick} className='dropdown-input'>
                    <div className='dropdown-selected-value'> {dropdownDisplay()}</div>
                    <div className='dropdown-tools'>
                        <div className='dropdown-tool'> 
                            <Icon/>
                        </div>
                    </div>
                </div>
                <div className='dropdown-menu'>
                    {showDropdown && users.map((user)=> 
                    <div onClick={()=>{onUserClick(user)}} key={user.id} className={`dropdown-item ${isSelected(user) && "selected"}`}>
                        {user.name} {user.surname}
                    </div>    
                    )} 
                </div>
                
            </div>
            <button onClick={changeAssignedTechnicianToTask} className='task-details-button'> Change Assigned Person</button>
            <div className='task-deatails-tree'>                
                <div key={task.id} className='task-page-task'>
                    <label> {task.id}</label>
                    <label> {task.type}</label>
                    <label> {task.companyName} </label>
                    <label>{task.serviceName} </label>
                    <label> {task.creationDate.toLocaleString()} </label>
                 </div>
            </div>
            <div className='task-details-comments'>
                {task.comments.slice().reverse().map((comment)=> 
                    <div key={comment.id} className='task-details-comment'>
                        <div> {comment.name} {comment.surname} </div>
                        <div> {comment.date.toLocaleString()}</div>
                        <div className='task-details-contentwraper'>
                        <div>{comment.content}</div>

                        </div>
                    </div>
                )}
            </div>
            <AddCommentForm task={task}/>
        </div>
    )
}

export default TaskDetails