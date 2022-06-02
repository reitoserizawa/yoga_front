import React from 'react';
import InstructorsItem from './InstructorsItem'

function Instructors ({instructors}) {

    // let output = "<div class='row'>";

    // instructors.map(instructor => {

    // for(var i=0;i<instructors.length;i++) {
    //    if((i%3)==0)
    //    {
    //       output += "</div><div class='row'>" + "<div class='col-md-4'>{divs}</div>";
    //    }
    //    else
    //    {
    //       output += "<div class='col-md-4'>{divs}</div>";
    //    }
    // }

    // if((i%3)!=0) {
    //    output += "</div><div class='row'>";
    // }
    // })

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