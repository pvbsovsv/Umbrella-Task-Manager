import { createContext, useState, useEffect } from "react"
const TaskContext = createContext()

function TaskProvider({ children }) {

    const [taskList, setTaskList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [editSelectedTask, setEditSelectedTask] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    //search bar query
    const [searchQuery, setSearchQuery] = useState("")

    const searchFilteredTasks = taskList.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))


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
        <TaskContext.Provider value={{ taskList, isLoading, error, addTask, deleteTask, markAsCompleted, editTask, editSelectedTask, setEditSelectedTask, showModal, setShowModal, showEditModal, setShowEditModal, searchQuery, setSearchQuery, searchFilteredTasks }}>
            {children}
        </TaskContext.Provider >
    )
}

export { TaskContext, TaskProvider }