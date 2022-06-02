import React from 'react';
import InstructorsItem from './InstructorsItem'

function Instructors ({instructors}) {

    return (
    <div className="main">

        <h1 style={{padding:"15px"}}>Instructors</h1>
        <hr />

        <div class="container">
            <div class="row">

            {instructors.map(instructor => {
            return <InstructorsItem key={instructor.id} name={instructor.first_name + " " + instructor.last_name} experience={instructor.years_of_experience} location={instructor.studio_location} image={instructor.avatar} bio={instructor.bio} />
            })}

            </div>
        </div>

    

    </div>
)}

export default Instructors