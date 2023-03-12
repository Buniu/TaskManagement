import { useParams } from "react-router-dom"




const CreateTaskPage = () => {
    const {taskType,serviceSid} = useParams()
    
    return (
        <div> Create Task Page</div>
    )

}

export default CreateTaskPage