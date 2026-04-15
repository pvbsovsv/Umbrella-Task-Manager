import './ProgressPanel.css'

function ProgressPanel() {
    return (
        <div className='progress-container'>
            <p>Task Name</p>
            <div className="progress-bar">
                <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
        </div>
    )
}

export default ProgressPanel