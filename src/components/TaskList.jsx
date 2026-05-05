

import './TaskList.css'


//components
import TaskCard from "./TaskCard";


function TaskList({ taskList, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask, searchFilteredTasks, searchQuery }) {


    let tasksToDisplay


    if (searchQuery.length > 0 && searchFilteredTasks.length === 0) {
        tasksToDisplay = <span className="no-tasks">No results. Create a task to begin</span>
    } else if (searchQuery.length > 0) {
        tasksToDisplay = searchFilteredTasks
    } else if (searchQuery.length === 0) {
        tasksToDisplay = taskList
    }


    return (
        <div className="task-list-container">

            {Array.isArray(tasksToDisplay)

                ?

                tasksToDisplay.map((task =>

                    <TaskCard
                        key={task.id}
                        {...task}
                        deleteTask={deleteTask}
                        markAsCompleted={markAsCompleted}
                        editTask={editTask}
                        setShowEditModal={setShowEditModal}
                        setEditSelectedTask={setEditSelectedTask}
                    />))

                :

                tasksToDisplay
            
            
            }
        </div>
    )
}

export default TaskList