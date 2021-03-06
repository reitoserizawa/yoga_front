import React from 'react';
import ReactDom from 'react-dom'

function Modal({ name, experience, location, image, bio, open, onClose }) {

    const Overlay = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        // zIndex: 1000,
    }
      
    const Modal_Style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '50px',
        height: '70%',
        width: '38%',
        // zIndex: 1000,
    }

    if(!open) return null 

    return ReactDom.createPortal(
        <div className='overlay' style={Overlay}>
            <div className='modal-style' style={Modal_Style}>
                
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>

                <div class="text-center">
                    <img className='round-circle' src={image} alt="Avatar"/>
                </div>
                    
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">{experience} Years Experience</span>
                    <h5 class="mt-2 mb-0" style={{padding:"5px"}}>{name}</h5>

                    <span style={{fontSize:"90%"}}><i class="fa-solid fa-location-dot"></i> {location}</span>
                    <hr />
                    <div class="text-center mt-3">
                        <span>{bio}</span>
                    </div>
                    <hr />
                    
                </div>
        </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;