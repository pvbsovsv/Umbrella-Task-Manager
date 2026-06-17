

import './TaskList.css'


//components
import TaskCard from "./TaskCard";

import useTasks from '../hooks/useTasks'



function TaskList() {

    const {taskList, deleteTask, markAsCompleted, editTask, setShowEditModal, setEditSelectedTask, searchFilteredTasks, searchQuery} = useTasks()

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
                    />))

                :

                tasksToDisplay
            
            
            }
        </div>
    )
}

export default TaskList