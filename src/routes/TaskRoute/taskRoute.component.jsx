import { Route, Routes } from "react-router-dom"

import TaskPage from "../../components/TaskPage/taskPage.component"
import TaskDetails from "../../components/TaskDetails/taskDetails.component"
import CreateTaskPage from "../../components/CreateTaskPage/createTaskPage.component"


const TaskRoute = () => {
    return (
        <Routes>
            <Route index element={<TaskPage/>}/>
            <Route path={`taskID/:taskId`} element={<TaskDetails/>}/>
            <Route path={'createTask/:taskType/:serviceSid'} element={<CreateTaskPage/>}/>
        </Routes>
    )
}

export default TaskRoute