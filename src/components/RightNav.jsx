
import './RightNav.css'


//components
import UserPanel from './UserPanel'
import UpcomingPanel from './UpcomingPanel'
import ProgressPanel from './ProgressPanel'


function RightPanel() {
  return (

    <div className="right-nav-container">


      <div className="user-nav">
        <UserPanel />
      </div>


      <div className="right-nav">
        <section className='upcoming-tasks'>
          <h3>upcoming soon</h3>
          <UpcomingPanel />
        </section>
        <section className="progress-tasks">
          <h3>Progress</h3>
          <ProgressPanel />
          <ProgressPanel />
          <ProgressPanel />

        </section>
      </div>

    </div>


  )
}

export default RightPanel