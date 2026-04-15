
import "./TaskCard.css"

//icons
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';
import { FilePenLine } from 'lucide-react';

function TaskCard({ id, title, description, completed, priority, dueDate, onComplete, onDelete }) {

    // color regarding priority
    function getColor() {
        if (priority === "high") return "var(--priority-high)"
        if (priority === "medium") return "var(--priority-medium)"
        if (priority === "low") return "var(--priority-low)"

        return "(var--border)"
    }



    return (
        <div className="task-card">

            <div className="task-card-header">
                <p>{title}</p>
                <div className="priority-container">
                    <span style={{ borderColor: getColor(), color: getColor() }} >{priority}</span>
                </div>
            </div>

            <div className="task-card-description">
                <span>{description}</span>
            </div>
            <div className="task-card-footer">

                <div>
                    <span>due</span>
                    <p>{dueDate}</p>
                </div>

                <div className="task-card-actions">
                    <button><CircleCheck size={28} strokeWidth={1.25} /></button>
                    <button><CircleX size={28} strokeWidth={1.25} /></button>
                    <button><FilePenLine size={30} strokeWidth={1.25} /></button>
                </div>
            </div>

        </div>
    )
}

export default TaskCard