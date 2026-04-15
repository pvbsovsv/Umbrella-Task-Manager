import './UpcomingPanel.css'


function UpcomingPanel() {
  return (
    <div className='upcoming-container'>


      {/* for now this list is hardcoded */}
      <ul>
        <li>
          <div className="upcoming-header">
            <p>Find freelance jobs</p>
          </div>
          <div className="upcoming-info">
            <span>Due in 2 days</span>
          </div>
        </li>
        <li>
          <div className="upcoming-header">
            <p>Prepare Ams trip</p>
          </div>
          <div className="upcoming-info">
            <span>Due in 15 days</span>
          </div>
        </li>
        <li>
          <div className="upcoming-header">
            <p>Class project</p>
          </div>
          <div className="upcoming-info">
            <span>Due in 20 days</span>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default UpcomingPanel