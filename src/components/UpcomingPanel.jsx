import './UpcomingPanel.css'

//hook

import useTasks from '../hooks/useTasks'



function UpcomingPanel() {

  







  return (
    <div className='upcoming-container'>


      <ul>
        <li>
          <div className="upcoming-header">
            <p>Find freelance jobs</p>
          </div>
          <div className="upcoming-info">
            <span>Due 2D</span>
          </div>
        </li>
        <li>
          <div className="upcoming-header">
            <p>Prepare Ams trip</p>
          </div>
          <div className="upcoming-info">
            <span>due 15D</span>
          </div>
        </li>
        <li>
          <div className="upcoming-header">
            <p>Class project</p>
          </div>
          <div className="upcoming-info">
            <span>Due 20D</span>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default UpcomingPanel