
import './UserPanel.css'
//icons
import { Inbox, Bell, ChevronDown } from 'lucide-react';

//assets
import userPic from '../assets/man.png'



function UserPanel() {
  return (
    <div className="user-panel">
      <button className="glass"><Inbox size={18} strokeWidth={1.5} /></button>
      <button className="glass"><Bell size={18} strokeWidth={1.5} /></button>
      <div className="user-header glass">
        <div className="user-pic">
          <div>
            <img src={userPic} alt="" />
          </div>
          <span className='user-status-dot'></span>
        </div>
        <span>Winston Sousa</span>
        <ChevronDown size={18} strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default UserPanel