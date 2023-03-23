import './addCommentForm.styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedUser } from '../../store/users/users.selector'
import { addCommentToTask } from '../../store/tasks/tasks.action'
import { useState } from 'react'


const AddCommentForm = ({task}) => {
    const loggedUser = useSelector(selectLoggedUser)
    const dispatch = useDispatch()
    const[comment,setComment] = useState('')


    const inputHandler = (event) => {
        const {value} = event.target
        setComment(value)

    }
    const dispatchHandler = () => {
        const locale = 'en-GB'; // set the locale to use for formatting the date
        const options = { 
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false // use 24-hour format
        };
        dispatch(addCommentToTask(task.id,{
            content: comment,
            date: new Date().toLocaleString(locale,options),
            id: task.comments.length,
            name: loggedUser.name,
            surname: loggedUser.surname
        }))
    }

    return (
        <div>
            <label> Add comment to Task</label>
            <input value={comment} onChange={inputHandler} />
            <button onClick={dispatchHandler}> Add Comment</button>
        </div>
    )
}

export default AddCommentForm