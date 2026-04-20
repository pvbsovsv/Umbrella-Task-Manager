import { useState } from 'react'
import './FormStyles.css'

function NewTaskForm({ addTask, onClose }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [priority, setPriority] = useState("")
    const [formError, setFormError] = useState("")


    function handleSubmit(e) {
        //prevent submit 
        e.preventDefault();
        //create task object
        const newTask = { title, description, priority, dueDate }
       
       //validation
       if (newTask.title === "" || newTask.description === "" || newTask.priority === "" || newTask.dueDate === "") {
        setFormError("Please fill all fields")
        return
       }

           //use function to add task
           addTask(newTask)
           //reset fields
           setTitle("")
           setDescription("")
           setPriority("")
           setDueDate("")
           //close modal function
           onClose()
    }




    return (
        <div className='new-task-wrapper'>
            <h3>Create a task</h3>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group priority-group">
                    <span>Priority</span>
                    <label htmlFor="high">High</label>
                    <input type="radio" id='high' name='priority' checked={priority === "high"} value={"high"} onChange={(e) => setPriority(e.target.value)} />
                    <label htmlFor="medium">Medium</label>
                    <input type="radio" id='medium' name='priority' checked={priority === "medium"} value={"medium"} onChange={(e) => setPriority(e.target.value)} />
                    <label htmlFor="low">Low</label>
                    <input type="radio" id='low' name='priority' checked={priority === "low"} value={"low"} onChange={(e) => setPriority(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="dueDate">Due Date</label>
                    <input type="date" id='dueDate' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="form-group">
                    {formError && <span className='modal-error'>{formError}</span>}
                    <input type="submit" className='submit-button' />
                </div>
            </form>

        </div>
    )
}

export default NewTaskForm