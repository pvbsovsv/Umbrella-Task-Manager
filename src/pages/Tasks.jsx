import useTasks from '../hooks/useTasks'



function Tasks() {

const {taskList, deleteTask, markAsCompleted, editTask, setEditSelectedTask, setShowEditModal} = useTasks()

  return (
    <div>Tasks</div>
  )
}

export default Tasks