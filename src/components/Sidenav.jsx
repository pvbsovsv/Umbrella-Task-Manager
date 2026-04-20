
import './Sidenav.css'

// assets
import brandLogoWh from '../assets/umbrella_white.svg'


//Lucide logos
import {LayoutDashboard,ListTodo, CalendarRange, FilePlusCorner, LifeBuoy, LogOut, UserRoundCheck } from 'lucide-react'




function Sidenav({activeView, setActiveView, setShowModal}) {

  return (
    <div className='sidenav-container'>

      
      <nav className="sidenav">
      <div className='brand-logo'><img src={brandLogoWh} alt='brand-logo' /></div>
        <ul>
          <li className={activeView === "dashboard" ? "is-active": "" } onClick={()=>setActiveView("dashboard")}> 
            <LayoutDashboard size={18} strokeWidth={1.5}/>
            <span>dashboard</span>
          </li>
          <li className={activeView === "tasks" ? "is-active" : ""} onClick={()=>setActiveView("tasks")}>  
            <ListTodo size={18} strokeWidth={1.25} />
            <span>tasks</span> {/* remember priority filter */}
          </li>
          <li className={activeView === "completed" ? "is-active" : ""} onClick={()=>setActiveView("completed")}> 
            <UserRoundCheck size={18} strokeWidth={1.25} />
            <span>completed</span>
          </li>
          <li className={activeView === "calendar" ? "is-active" : "" } onClick={()=>setActiveView("calendar")}> 
            <CalendarRange size={18} strokeWidth={1.25} />
            <span>calendar</span>
          </li>
        </ul>
      </nav>

      <nav className="sidenav-bottom">
        <ul>
          <li onClick={()=>setShowModal(true)}>
            <FilePlusCorner  size={18} strokeWidth={1.25} />
            <span>new task</span>
          </li>
          <li>
            <LifeBuoy size={18} strokeWidth={1.25} />
            <span className='feature-na'>help</span>
          </li>
          <li>
            
            <LogOut size={18} strokeWidth={1.25} />
            <span className='feature-na'>logout</span>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Sidenav