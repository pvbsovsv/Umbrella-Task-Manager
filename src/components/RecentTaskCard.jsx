

import "./RecentTaskCard.css"

import { useNavigate } from "react-router-dom";

import { Ellipsis } from 'lucide-react';

function RecentTaskCard({ id, title, description, completed, priority, dueDate }) {

const navigate = useNavigate()

    // color regarding priority
    function getColor() {
        if (priority === "high") return "var(--priority-high)"
        if (priority === "medium") return "var(--priority-medium)"
        if (priority === "low") return "var(--priority-low)"

        return "var(--border)"
    }


    // shorten priority word
    function shortenPrio() {


        if (priority === "high") return "H"
        if (priority === "medium") return "M"
        if (priority === "low") return "L"

        return ""
    }


    return (


        <div onClick={()=>navigate(`/tasks/${id}`)} className='rc-task-card glass'>

            <div className="rc-task-card-header">
                <p>{title}</p>
                <div style={{ borderColor: getColor() }} className="priority-container">
                    <span style={{ color: getColor() }} >{shortenPrio()}</span>
                </div>
            </div>


            <div className="rc-task-card-description">
                <span>{description}</span>
            </div>

            <div className="rc-task-card-footer">
                <div>
                    <span>due {dueDate}</span>
                </div>

                <div className="rc-task-card-actions">
                    <button><Ellipsis /></button>
                </div>

            </div>


        </div>
    )
}

export default RecentTaskCard