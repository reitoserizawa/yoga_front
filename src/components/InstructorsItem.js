import React, {useState} from 'react';
import Modal from './Modal'

function InstructorsItem ({name, experience, location, image, bio}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-0 shadow">
          <img src={image} class="card-img-top" alt="Avatar"/>
          <div class="card-body text-center">
            <h5 class="card-title mb-0">{name}</h5>
            <div class="card-text text-black-50">
                <span style={{fontSize:"90%"}}><i class="fa-solid fa-location-dot"></i> {location}</span>
            </div>
            
            <hr/>
            
            <button type="button" class="btn btn-outline-info" onClick={() => setIsOpen(!isOpen)}>See Profile</button>
            <Modal name={name} experience={experience} location={location} image={image} bio={bio} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
        </div>
      </div>





)}

export default InstructorsItem