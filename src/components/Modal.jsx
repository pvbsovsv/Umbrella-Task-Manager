import './Modal.css'

import { X } from 'lucide-react'




function Modal({ onClose, children }) {
    return (
        <div className='modal-wrapper'>
            <div className="modal-box">
                <button onClick={onClose}><X size={25} strokeWidth={1.25} /></button>
                {children} 
            </div>
        </div>
    )
}

export default Modal