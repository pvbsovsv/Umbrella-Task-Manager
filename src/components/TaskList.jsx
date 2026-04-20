

import './TaskList.css'


//components
import TaskCard from "./TaskCard";


function TaskList({ taskList, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask }) {


    return (
        <div className="task-list-container">

            {taskList.length === 0 ? <span className="no-tasks">No tasks created. Create a task to begin</span> : taskList.map((task =>

                <TaskCard
                    key={task.id}
                    {...task}
                    deleteTask={deleteTask}
                    markAsCompleted={markAsCompleted}
                    editTask={editTask}
                    setShowEditModal={setShowEditModal}
                    setEditSelectedTask={setEditSelectedTask}
                />))}
        </div>
    )
}

export default TaskList