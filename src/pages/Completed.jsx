
import useTasks from '../hooks/useTasks'



function Completed() {
  const {taskList, deleteTask, markAsCompleted, editTask} = useTasks()
  return (
    <div>Completed</div>
  )
}

export default Completed