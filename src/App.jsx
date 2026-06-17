
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
import EditTask from './components/EditTask'
import useTasks from './hooks/useTasks'



function App() {

  const { taskList, deleteTask, markAsCompleted, editTask, addTask, showModal, setShowModal, showEditModal, setShowEditModal, editSelectedTask, setEditSelectedTask } = useTasks()

  return (
    <div className="app-container">

      <div className="grid-sidenav">

        <Sidenav setShowModal={setShowModal} />

      </div>

      <div className="grid-center">
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/tasks' element={<Tasks/>} />
          <Route path='/completed' element={<Completed/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/tasks/:id' element={<TaskDetail/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <div className="grid-right">
        <RightPanel />
      </div>


      {/* new task modal */}
      {showModal && <Modal onClose={() => setShowModal(false)}>

        <NewTaskForm  onClose={() => setShowModal(false)} />

      </Modal>}

      {/* edit task modal */}
      {showEditModal && <Modal onClose={() => setShowEditModal(false)}>

        <EditTask onClose={() => setShowEditModal(false)} />

      </Modal>}


    </div>
  )
}

export default App
