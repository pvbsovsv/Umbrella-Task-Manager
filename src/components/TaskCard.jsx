
import "./TaskCard.css"

import { useNavigate } from "react-router-dom";

//icons
import { CircleCheck, CircleX, FilePenLine } from 'lucide-react';

function TaskCard({ id, title, description, completed, priority, dueDate, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask }) {


    // color regarding priority
    function getColor() {
        if (priority === "high") return "var(--priority-high)"
        if (priority === "medium") return "var(--priority-medium)"
        if (priority === "low") return "var(--priority-low)"

        return "var(--border)"
    }


    const navigate = useNavigate()

    return (
        <div className="task-card glass">

            <div className="task-card-header">
                <p onClick={() => navigate(`/tasks/${id}`)}>{title}</p>
                <div className="priority-container">
                    <span style={{ borderColor: getColor(), color: getColor() }} >{priority}</span>
                </div>
            </div>

            <div className="task-card-description">
                <span>{description}</span>
            </div>
            <div className="task-card-footer">

                <div>
                    <span>due {dueDate}</span>
                </div>

                <div className="task-card-actions">
                    <button onClick={() => markAsCompleted(id)}><CircleCheck size={28} strokeWidth={1.25} /></button>
                    <button onClick={() => deleteTask(id)}><CircleX size={28} strokeWidth={1.25} /></button>
                    <button onClick={() => {
                        setEditSelectedTask({id, title, description, dueDate, completed, priority})
                        setShowEditModal(true)
                    }} ><FilePenLine size={30} strokeWidth={1.25} /></button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard