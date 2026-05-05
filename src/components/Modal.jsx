
import { useEffect } from 'react'

import './Modal.css'

import { X } from 'lucide-react'




function Modal({ onClose, children }) {


    function handleKeyDown(e) {

        if (e.key === 'Escape')
        {
            onClose()
        }


    }


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    },[] )


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