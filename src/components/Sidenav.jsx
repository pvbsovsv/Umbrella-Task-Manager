
import {NavLink} from 'react-router-dom'


import './Sidenav.css'

// assets
import brandLogoWh from '../assets/umbrella_white.svg'


//Lucide logos
import {LayoutDashboard,ListTodo, CalendarRange, FilePlusCorner, LifeBuoy, LogOut, UserRoundCheck } from 'lucide-react'




function Sidenav({setShowModal}) {

  return (
    <div className='sidenav-container'>

      
      <nav className="sidenav">
      <div className='brand-logo'><img src={brandLogoWh} alt='brand-logo' /></div>
        <ul>
          <NavLink  to={'/'} end> 
            <LayoutDashboard size={18} strokeWidth={1.5}/>
            <span>dashboard</span>
          </NavLink>
          <NavLink to={'/tasks'} end>  
            <ListTodo size={18} strokeWidth={1.25} />
            <span>tasks</span> {/* remember priority filter */}
          </NavLink>
          <NavLink to={'/completed'} end > 
            <UserRoundCheck size={18} strokeWidth={1.25} />
            <span>completed</span>
          </NavLink>
          <NavLink to={'/calendar'} end> 
            <CalendarRange size={18} strokeWidth={1.25} />
            <span>calendar</span>
          </NavLink>
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