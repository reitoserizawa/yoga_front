import React from 'react';
import { Parallax } from "react-parallax";
import InstructorsItem from './InstructorsItem'

function Instructors ({instructors}) {


    return (
    <div className="main">

        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage="https://images.squarespace-cdn.com/content/v1/5cc20ee3da50d34de10e1549/1562523051342-CNFHX2TXFCP6TVU716O9/yoga-mix-banners-classes.jpg?format=2500w"
        bgImageAlt=""
        // strength={-200}
        className="parallax"
        >
                    <div class="position-relative">
            <h1 className="hero_title">Instructors</h1>
        </div>     
        </Parallax>

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