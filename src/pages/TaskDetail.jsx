
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './TaskDetail.css'

import { CircleCheck, CircleX, FilePenLine } from 'lucide-react';




function TaskDetail({ taskList, deleteTask, markAsCompleted, setShowEditModal, setEditSelectedTask }) {

    const { id } = useParams()

    const navigate = useNavigate()
    const selectedTask = taskList.find(task => task.id === Number(id))
    

    if (!selectedTask) {
        return <div>Task not found. <button onClick={()=> navigate("/")}>Go back</button></div>
    }

    // color regarding priority
    function getColor() {
        if (selectedTask.priority === "high") return "var(--priority-high)"
        if (selectedTask.priority === "medium") return "var(--priority-medium)"
        if (selectedTask.priority === "low") return "var(--priority-low)"

        return "var(--border)"
    }

    return (

        <div className='task-detail-container'>


            <div className="task-detail-header">
                <h1>{selectedTask.title}</h1>
                <div className="task-info">
                    <div className='task-low-row'>

                        <div style={{ borderColor: getColor() }} className="priority-container">
                            <span style={{ color: getColor() }} >{selectedTask.priority}</span>
                        </div>
                        <div className="task-d-date">
                            <span>Due {selectedTask.dueDate}</span>
                        </div>
                    </div>
                    <div className="task-buttons">
                        <button onClick={() => markAsCompleted(Number(id))} ><CircleCheck size={35} strokeWidth={1.25} /></button>
                        <button onClick={() => {deleteTask(Number(id)); navigate("/")}}><CircleX size={35} strokeWidth={1.25} /></button>
                        <button onClick={() => {
                            setEditSelectedTask(selectedTask)
                            setShowEditModal(true)
                        }}><FilePenLine size={35} strokeWidth={1.25} /></button>
                    </div>
                </div>
            </div>
            <div className="task-detail-description">

                <span>{selectedTask.description}</span>
            </div>
            <div className="task-notes-container">
                <div>
                    <h2>Task Notes</h2>
                </div>
                {/* todo edit with real data */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem debitis repudiandae dicta distinctio facere, nobis nulla architecto, quasi velit excepturi repellendus quos, provident cum rem quam molestiae? Odit, dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem debitis repudiandae dicta distinctio facere, nobis nulla architecto, quasi velit excepturi repellendus quos, provident cum rem quam molestiae? Odit, dolorum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem debitis repudiandae dicta distinctio facere, nobis nulla architecto, quasi velit excepturi repellendus quos, provident cum rem quam molestiae? Odit, dolorum!</p>
            </div>

        </div>
    )
}

export default TaskDetail