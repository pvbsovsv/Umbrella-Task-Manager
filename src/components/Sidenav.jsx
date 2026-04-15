
import './Sidenav.css'

// assets
import brandLogoWh from '../assets/umbrella_white.svg'


//Lucide logos
import {LayoutDashboard,ListTodo, ListChecks, CalendarRange, FilePlusCorner, LifeBuoy, LogOut } from 'lucide-react'




function Sidenav({activeView, setActiveView}) {

  return (
    <div className='sidenav-container'>

      
      <nav className="sidenav">
      <div className='brand-logo'><img src={brandLogoWh} /></div>
        <ul>
          <li className='isActive'> {/* here goes active view */}
            <LayoutDashboard size={18} strokeWidth={1.5}/>
            <span>dashboard</span>
          </li>
          <li> {/* here goes active view */}
            <ListTodo size={18} strokeWidth={1.25} />
            <span>tasks</span> {/* remember priority filter */}
          </li>
          <li> {/* here goes active view */}
            <ListChecks size={18} strokeWidth={1.25} />
            <span>completed</span>
          </li>
          <li> {/* here goes active view */}
            <CalendarRange size={18} strokeWidth={1.25} />
            <span>calendar</span>
          </li>
        </ul>
      </nav>

      <nav className="sidenav-bottom">
        <ul>
          <li>
            <FilePlusCorner size={18} strokeWidth={1.25} />
            <span >new task</span>
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