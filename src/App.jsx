import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Sidenav from './components/Sidenav'
import Dashboard from './components/Dashboard'
import RightPanel from './components/RightPanel'
import Modal from './components/Modal'
import NewTaskForm from './components/NewTaskForm'
import Completed from './pages/Completed'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'
import TaskDetail from './pages/TaskDetail'
import NotFound from './pages/NotFound'


import tasksJson from './assets/tasks.json'
import EditTask from './components/EditTask'


function App() {

  const [taskList, setTaskList] = useState(tasksJson)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editSelectedTask, setEditSelectedTask] = useState(null)




  //add tasks
  function addTask(newTask) {

    //get max id
    const maxId = taskList.reduce((max, task) => (task.id > max ? task.id : max), 0)

    const taskWithId = { ...newTask, id: maxId + 1, completed: false }
    //add it to the task list
    setTaskList(prev => [...prev, taskWithId])
  }

  //delete tasks

  function deleteTask(id) {

    //filter out the task that matches the id 
    const updatedTaskList = taskList.filter((task) => task.id !== id)

    //update tasklist state
    setTaskList(updatedTaskList)
  }

  //mark task complete

  function markAsCompleted(id) {

    const completedTask = taskList.map(task => task.id === id ? { ...task, completed: true } : task)

    setTaskList(completedTask)
  }

  //edit task

  function editTask(id, updatedFields) {

    const editedTask = taskList.map(task => task.id === id ? { ...task, ...updatedFields } : task)

    setTaskList(editedTask)

  }






  return (
    <div className="app-container">

      <div className="grid-sidenav">

        <Sidenav setShowModal={setShowModal} />

      </div>

      <div className="grid-center">
        <Routes>
          <Route path='/' element={<Dashboard taskList={taskList}
            deleteTask={deleteTask}
            markAsCompleted={markAsCompleted}
            editTask={editTask}
            setShowEditModal={setShowEditModal}
            setEditSelectedTask={setEditSelectedTask} />} />
          <Route path='/tasks' element={<Tasks taskList={taskList} deleteTask={deleteTask} markAsCompleted={markAsCompleted} editTask={editTask} setShowEditModal={setShowEditModal} setEditSelectedTask={setEditSelectedTask} />} />
          <Route path='/completed' element={<Completed taskList={taskList} deleteTask={deleteTask} markAsCompleted={markAsCompleted} editTask={editTask} setShowEditModal={setShowEditModal} setEditSelectedTask={setEditSelectedTask} />} />
          <Route path='/calendar' element={<Calendar taskList={taskList} />} />
          <Route path='/tasks/:id' element={<TaskDetail taskList={taskList} deleteTask={deleteTask} markAsCompleted={markAsCompleted} setShowEditModal={setShowEditModal} setEditSelectedTask={setEditSelectedTask} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <div className="grid-right">
        <RightPanel />
      </div>


      {/* new task modal */}
      {showModal && <Modal onClose={() => setShowModal(false)}>

        <NewTaskForm addTask={addTask} onClose={() => setShowModal(false)} />

      </Modal>}

      {/* edit task modal */}
      {showEditModal && <Modal onClose={() => setShowEditModal(false)}>

        <EditTask editSelectedTask={editSelectedTask} editTask={editTask} onClose={() => setShowEditModal(false)} />

      </Modal>}


    </div>
  )
}

export default App
