import './FormStyles.css'
import { useState } from 'react'


function EditTask({ editTask, editSelectedTask, onClose }) {



    const [title, setTitle] = useState(editSelectedTask.title)
    const [description, setDescription] = useState(editSelectedTask.description)
    const [dueDate, setDueDate] = useState(editSelectedTask.dueDate)
    const [priority, setPriority] = useState(editSelectedTask.priority)
    const [formError, setFormError] = useState("")


    function handleSubmit(e) {
        //prevent submit 
        e.preventDefault();

        //validation
        if (title === "" || description === "" || priority === "" || dueDate === "") {
            setFormError("Please fill all fields")
            return
        }

        editTask(editSelectedTask.id, {title, description, priority, dueDate})

        //close modal function
        onClose()


    }


    return (
        <div className='edit-task-wrapper'>
            <h3>Edit task</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">description</label>
                    <textarea id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group priority-group">
                    <span>Priority</span>
                    <label htmlFor="high">High</label>
                    <input type="radio" id='high' name='priority' value="high" checked={priority === "high"} onChange={(e) => setPriority(e.target.value)} />
                    <label htmlFor="medium">Medium</label>
                    <input type="radio" id='medium' name='priority' value="medium" checked={priority === "medium"} onChange={(e) => setPriority(e.target.value)} />
                    <label htmlFor="low">Low</label>
                    <input type="radio" id='low' name='priority' value="low" checked={priority === "low"} onChange={(e) => setPriority(e.target.value)} />
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

export default EditTask