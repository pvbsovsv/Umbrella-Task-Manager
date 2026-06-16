import { useState } from 'react'
import { useEffect } from 'react'
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



  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editSelectedTask, setEditSelectedTask] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [taskList, setTaskList] = useState([])





  // fetch async function
  useEffect(() => {
    async function loadTasks() {

      setIsLoading(true)
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        const data = await res.json()
        setTaskList(data)
      } catch (err) {
        setError('Failed to load tasks')
      } finally {
        setIsLoading(false)
      }
    }
    loadTasks();
  }, [])

  //add task

  async function addTask(newTask) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask)
      })
      const data = await res.json()

      setTaskList(prev => [...prev, data])
    } catch (err) {
      setError('Failed to create new Task')
    }
  }


  //delete tasks

  async function deleteTask(id) {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: 'DELETE',
      })
      setTaskList(prev => prev.filter((task) => task.id !== id))
    } catch (err) {
      setError('Failed to delete task')
    }


  }
  //mark task complete

  async function markAsCompleted(id) {

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ completed: true })
      })
      setTaskList(prev => prev.map(task => task.id === id ? { ...task, completed: true } : task))
    } catch (err) {
      setError('Failed to mark task as completed')
    }

  }

  //edit task

  async function editTask(id, updatedFields) {


    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updatedFields)
      })
      setTaskList(prev => prev.map(task => task.id === id ? { ...task, ...updatedFields } : task))
    } catch (err) {
      setError('Failed to edit task')
    }


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
            setEditSelectedTask={setEditSelectedTask}
            isLoading={isLoading} />} />
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
