

import './TaskList.css'


//components
import TaskCard from "./TaskCard";

//json with tasks

import tasksJson from '../assets/tasks.json'



function TaskList() {

    const taskListArr = tasksJson

 


    return (
        <div className="task-list-container">

            {taskListArr.map((task =>

                <TaskCard
                    key={task.id}
                    {...task} //all props combined - spread operator
                />))}


        </div>
    )
}

export default TaskList